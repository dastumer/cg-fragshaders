#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 TempColor = texture(image, texcoord);
    /*TempColor.r = 1.0 - TempColor.r;
    TempColor.g = 1.0 - TempColor.g;
    TempColor.b = 1.0 - TempColor.b;
    FragColor = TempColor;*/
    float L = 0.299 * TempColor.r + 0.587 * TempColor.g + 0.114 * TempColor.b;
    FragColor = vec4(TempColor.r * texcoord.y * L, TempColor.g * texcoord.y * L, TempColor.b * texcoord.y * L, 1.0);

}
