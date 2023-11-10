import config as cfg
import urllib
import flask

def find_longest_prefix(path, public_dict, alias_dict):
    path_parts = path.strip('/').split('/')

    # Check longest match in both public directories and aliases
    longest_prefix = None
    for i in range(len(path_parts), 0, -1):
        prefix = '/'.join(path_parts[:i])
        if prefix in public_dict or prefix in alias_dict:
            longest_prefix = prefix
            break

    if longest_prefix in cfg.ALIASES and cfg.ALIASES[longest_prefix]:
        longest_prefix = cfg.ALIASES[longest_prefix]
    
    return longest_prefix

def get_custom_handler(path, default_handler):
    prefix = find_longest_prefix(path, cfg.PUBLIC_DIRECTORIES, cfg.ALIASES)
    if prefix:

        # Determine which dictionary has the match
        if prefix in cfg.PUBLIC_DIRECTORIES and cfg.PUBLIC_DIRECTORIES[prefix]:
            return cfg.PUBLIC_DIRECTORIES[prefix]
    return default_handler

def get_referer_prefix(referer):
    path = urllib.parse.urlparse(referer).path
    path = path.strip('/')
    # Find the longest prefix match in ALIASES
    prefix = find_longest_prefix(path, cfg.PUBLIC_DIRECTORIES, cfg.ALIASES)
        
    return prefix

def serve_file_from_container(container, relative_path):
    print('Getting static file from container', f'{cfg.SERVE_DIRECTORY}/{container}', relative_path)
    return flask.send_from_directory(f'{cfg.SERVE_DIRECTORY}/{container}', relative_path)

def serve_file_from_raw_directory(filename):
    return flask.send_from_directory(f'{cfg.SERVE_DIRECTORY}', filename)