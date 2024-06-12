
# Random Image Generator

A cli to generate random images


## Installation

Install project globally to access it from anywhere with npm

```bash
npm install -g .
```

## Quick Start

The cli can be access by typing below command in terminal

```bash
rimg --version
```

Generate a random image in current working directory with random name

```bash
rimg generate
```
## Options

* `-p or --path` (description: absolute path, default: current working directory)

   If not provided then uses the current working     directory in which the command was executed

   ### Example

   Create r random file in sepecified path 
   ```bash
   rimg generate -p /var/www/html
   ```

   Create a random file in current working directory
   ```bash
   rimg generate
   ```

* `-n or --name` (description: name of file, default: random name)

   If not provided then uses the default value

   ### Example

   Create a random file with sepecified name 
   ```bash
   rimg generate -n sample_image
   ```

   Create a random file with random name
   ```bash
   rimg generate
   ```

* `-w or --width` (description: width of image, default: 200)

   If not provided then uses the default value

   ### Example

   Create a random file with sepecified width 
   ```bash
   rimg generate -w 400
   ```

   Create a random file with default width
   ```bash
   rimg generate
   ```

* `-h or --height` (description: height of image, default: 200)

   If not provided then uses the default value

   ### Example

   Create a random file with sepecified height 
   ```bash
   rimg generate -h 400
   ```

   Create a random file with default height
   ```bash
   rimg generate
   ```
