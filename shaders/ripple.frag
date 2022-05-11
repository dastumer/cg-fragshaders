#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 temptexcoord = texcoord;
    temptexcoord = temptexcoord * 2.0 - 1.0;
    if (length(temptexcoord)<1.0){
        float theta = atan(temptexcoord.y, temptexcoord.x);
        float radius = length(temptexcoord);
        vec2 offset = temptexcoord * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
        temptexcoord = texcoord + offset;
    } else {
        temptexcoord = texcoord;
    }
    FragColor = texture(image, temptexcoord);
}
