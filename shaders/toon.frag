#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 TempColor = texture(image, texcoord);
    TempColor.r = round(TempColor.r * 4.0) / 4.0;
    TempColor.g = round(TempColor.g * 4.0) / 4.0;
    TempColor.b = round(TempColor.b * 4.0) / 4.0;
    FragColor = TempColor;
}
