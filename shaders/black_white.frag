#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 TempColor = texture(image, texcoord);
    float L = 0.299 * TempColor.r + 0.587 * TempColor.g + 0.114 * TempColor.b;
    FragColor = vec4(L, L, L, 1.0);
}
