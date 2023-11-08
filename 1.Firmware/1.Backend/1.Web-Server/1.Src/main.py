import flask
import config as cfg
import urllib


app = flask.Flask(__name__)


@app.route('/static/<path:filename>')
def raw_file(filename):
    return flask.send_from_directory(cfg.SERVE_DIRECTORY, filename)

@app.route('/', defaults={'filename': '/'})
@app.route('/<path:filename>')
def transformed_file(filename):
    parts = filename.rsplit('/', 1)

    if '.' in parts[-1]:
        parts = filename.rsplit('/')
        referer = flask.request.headers.get('Referer')
        if not referer:
            return "No referrer header", 400

        path = urllib.parse.urlparse(referer).path
        if path in cfg.ALIASES.keys():
            path = cfg.ALIASES[path]
        if path[0] == "/":
            path = path[1:]
        referer_directory = path.replace('/', '->') if not parts[0] in cfg.RAW_DIRECTORIES else filename
        transformed_directory = referer_directory
        if not parts[0] in cfg.RAW_DIRECTORIES:
            return flask.send_from_directory(f'{cfg.SERVE_DIRECTORY}/{transformed_directory}', f"dist/{'/'.join(parts[len(path.rsplit('/'))-1:])}")
        else:
            return flask.send_from_directory(f'{cfg.SERVE_DIRECTORY}', transformed_directory)

    else:
        if filename in cfg.ALIASES.keys():
            filename = cfg.ALIASES[filename]
        transformed_path = filename.replace('/', '->')
        
        if transformed_path in cfg.PUBLIC_DIRECTORIES:
            return flask.send_from_directory(f'{cfg.SERVE_DIRECTORY}/{transformed_path}', './dist/index.html')
        
    return "Page not found", 404

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
