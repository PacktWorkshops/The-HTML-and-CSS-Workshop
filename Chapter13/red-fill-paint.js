class RedFillPaintWorklet {
    paint(context, geometry) {
        context.fillStyle = "red";
        context.fillRect(0, 0, geometry.width, geometry.height);
    }
}

registerPaint("red-fill", RedFillPaintWorklet);