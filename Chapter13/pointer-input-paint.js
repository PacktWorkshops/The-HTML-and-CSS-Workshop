class PointerInputPaint {
    static get inputProperties() {
        return ["--position-x", "--position-y", "--primary-fill-color", "--secondary-fill-color", "--size"];
    }

    paint(context, geometry, properties) {
        const x = properties.get("--position-x");
        const y = properties.get("--position-y");
        
        const primaryColor = properties.get("--primary-fill-color");
        const secondaryColor = properties.get("--secondary-fill-color");

        const size = properties.get("--size");

        var gradient = context.createRadialGradient(x, y, 0, x, y, geometry.width * size);
        gradient.addColorStop(0.24, primaryColor);
        gradient.addColorStop(0.25, secondaryColor);
        gradient.addColorStop(1, secondaryColor);
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, geometry.width, geometry.height);
    }
}

registerPaint("pointer", PointerInputPaint);