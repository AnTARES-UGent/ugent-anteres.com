import os
import handlers

_ABSOLUTE_PATH = os.path.abspath('.')
SERVE_DIRECTORY = os.path.join(_ABSOLUTE_PATH, "..", "..", "..", "2.Frontend", "1.Web-Representations")

PUBLIC_DIRECTORIES = {
    "global": None,
    "root": None,
}

RAW_DIRECTORIES = [
    "global",
]

ALIASES = {
    "": "root"
}