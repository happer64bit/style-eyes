# Style Eyes

`style-eyes` is a command-line tool for optimizing CSS files by combining related properties into shorthand forms. It helps streamline your CSS and improve performance by reducing file size.

## Features

- **Combine Padding Properties**: Merges `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` into a single `padding` property.
- **Combine Margin Properties**: Merges `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` into a single `margin` property.
- **Combine Background Properties**: Merges `background-color`, `background-image`, `background-position`, `background-repeat`, and `background-size` into a single `background` property.
- **Combine Border Properties**: Merges `border-top-width`, `border-top-style`, `border-top-color`, etc., into a single `border` property.
- **Combine Font Properties**: Merges `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family` into a single `font` property.
- **Combine Border Radius Properties**: Merges `border-top-left-radius`, `border-top-right-radius`, `border-bottom-right-radius`, and `border-bottom-left-radius` into a single `border-radius` property.
- **Optimize Display Properties**: Merges conflicting `display` properties into a single value.

## Installation

To use `style-eyes`, clone the repository and install dependencies:

```bash
git clone https://github.com/happer64bit/style-eyes.git
cd style-eyes
npm install
```

## Usage

The `style-eyes` CLI tool optimizes CSS files and writes the output to a specified file. You can choose to overwrite the original file if desired.

### Command

```bash
style-eyes <inputFile> [outputFile] [-o, --overwrite]
```

- `<inputFile>`: Path to the input CSS file.
- `[outputFile]`: Optional path to the output CSS file. If not provided, the optimized CSS will be written to `<inputFile>.o.css`.
- `-o, --overwrite`: Optional flag to overwrite the output file if it exists.

### Examples

Optimize `styles.css` and save the result to `styles.o.css`:

```bash
style-eyes styles.css styles.o.css
```

Optimize `styles.css` and overwrite the original file:

```bash
style-eyes styles.css -o
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

GitHub: [happer64bit](https://github.com/happer64bit)
