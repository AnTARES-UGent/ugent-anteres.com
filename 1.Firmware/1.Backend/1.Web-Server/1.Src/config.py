import os

_ABSOLUTE_PATH = os.path.abspath('.')
SERVE_DIRECTORY = os.path.join(_ABSOLUTE_PATH, "..", "..", "..", "2.Frontend", "1.Web-Representations")

PUBLIC_DIRECTORIES = [
    "global",
    "root",
]

RAW_DIRECTORIES = [
    "global"
]

ALIASES = {
    "/": "root"
}