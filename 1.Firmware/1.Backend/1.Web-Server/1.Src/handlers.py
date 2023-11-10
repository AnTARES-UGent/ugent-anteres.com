import flask
import config as cfg
import util

def default_file_handler(filename, prefix, container):
    parts = filename.split('/')

    if '.' in parts[-1]:
        referer = flask.request.headers.get('Referer')
        if not referer:
            return "No referrer header", 400

        referrer_prefix = util.get_referer_prefix(referer)

        if parts[0] not in cfg.RAW_DIRECTORIES:
            referer_container = referrer_prefix.replace('/', '->')
            print('Serving static file from container', referer_container)
            return util.serve_file_from_container(referer_container, f'dist/{str("/").join(parts[len(prefix.split("/")):])}')
        else:
            print('Serving static file raw directory', filename)
            return util.serve_file_from_raw_directory(filename)

    else:
        print('Entered default handler\'s repr. server for', prefix)
        return util.serve_file_from_container(container, 'dist/index.html')

    return "Page not found", 404