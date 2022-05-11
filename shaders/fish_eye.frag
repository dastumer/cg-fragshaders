#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 temptexcoord = texcoord;
    temptexcoord = temptexcoord * 2.0 - 1.0;
    if (length(temptexcoord)<1.0){
        float theta = atan(temptexcoord.y, temptexcoord.x);
        float radius = pow(length(temptexcoord), 1.5);
        temptexcoord.x = radius * cos(theta);
        temptexcoord.y = radius * sin(theta);
        temptexcoord = 0.5 * (temptexcoord + 1.0);
    } else {
        temptexcoord = texcoord;
    }
    FragColor = texture(image, temptexcoord);
}
