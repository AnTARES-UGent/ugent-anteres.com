# Makefile

# Variables
VENV_PATH := ./venv
SRC_DIR := ./1.Src
FLASK_APP := main.py
WSGI_APP := wsgi

# Default target executed when no arguments are given to make.
default: build

venv:
	source $(VENV_PATH)/bin/activate

# Install dependencies and development tools.
install:
	@echo "Installing Requirements..."
	python -m pip install -r Requirements.txt

# Run development server
dev:
	@echo "Starting the development Flask app..."
	cd $(SRC_DIR) && python $(FLASK_APP)

# Deploy the application using Gunicorn
deploy:
	@echo "Deploying the WSGI Flask app..."
	# Run Gunicorn with the Flask app
	# The following assumes your binary is named 'main'
	# Replace '4' with the number of workers you desire
	# Replace '8000' with the port you want Gunicorn to bind to
	cd $(SRC_DIR) && python -m gunicorn -w 4 -b 0.0.0.0:8000 $(WSGI_APP):app

.PHONY: install build deploy default
