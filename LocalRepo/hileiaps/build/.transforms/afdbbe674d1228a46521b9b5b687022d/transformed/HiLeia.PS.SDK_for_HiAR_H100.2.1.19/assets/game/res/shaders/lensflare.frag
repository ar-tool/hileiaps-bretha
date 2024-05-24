#ifdef OPENGL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

///////////////////////////////////////////////////////////
// Uniforms
uniform sampler2D u_texture;
uniform vec3 u_color;
//uniform float u_modulateAlpha;

///////////////////////////////////////////////////////////
// Varyings
varying vec2 v_texCoord;
varying vec4 v_color;


void main()
{
    gl_FragColor = texture2D(u_texture, v_texCoord);
    gl_FragColor = vec4(u_color, sqrt(dot(gl_FragColor.rgb, gl_FragColor.rgb)) * 0.5);
    //gl_FragColor.a *= u_modulateAlpha;
}