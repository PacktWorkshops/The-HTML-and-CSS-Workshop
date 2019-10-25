class GradientPaintWorklet {
    static get inputProperties() {
        return ["--primary-fill-color", "--secondary-fill-color"];
    }

    paint(context, geometry, properties) {
        const primaryColor = properties.get("--primary-fill-color");
        const secondaryColor = properties.get("--secondary-fill-color");

        const gradient = context.createLinearGradient(0, 0, geometry.width, geometry.height);
        gradient.addColorStop(0, primaryColor);
        gradient.addColorStop(1.0, secondaryColor);
        
        context.fillStyle = gradient;
        context.fillRect(0, 0, geometry.width, geometry.height);
    }
}

registerPaint("animated-gradient", GradientPaintWorklet);