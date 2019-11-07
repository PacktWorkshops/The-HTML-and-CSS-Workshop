class ColorFillPaintWorklet {
    static get inputProperties() {
        return ["--fill-color"];
    }

    paint(context, geometry, properties) {
        const color = properties.get("--fill-color");
        context.fillStyle = color;
        context.fillRect(0, 0, geometry.width, geometry.height);
    }
}

registerPaint("color-fill", ColorFillPaintWorklet);