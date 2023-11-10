import flask
import config as cfg
import util
import handlers

app = flask.Flask(__name__)

@app.route('/', defaults={'filename': '/'})
@app.route('/<path:filename>')
def transformed_file(filename):
    filename = filename.strip('/')
    prefix = util.find_longest_prefix(filename, cfg.PUBLIC_DIRECTORIES, cfg.ALIASES)
    print('Received request for filename', filename)
    print('Received request for prefix', prefix)
    
    if prefix:
        container = prefix.replace('/', '->')
        print('Mapped prefix to container', container)

        if prefix in cfg.PUBLIC_DIRECTORIES:
            handler = util.get_custom_handler(filename, handlers.default_file_handler)
            print('Entering handler', handler)
            return handler(filename, prefix, container)
        
    return "Page not found", 404

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
