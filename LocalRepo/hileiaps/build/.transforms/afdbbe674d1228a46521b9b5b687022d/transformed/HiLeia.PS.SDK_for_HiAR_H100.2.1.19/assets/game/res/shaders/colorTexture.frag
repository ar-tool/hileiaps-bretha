#ifdef OPENGL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

///////////////////////////////////////////////////////////
// Uniforms
uniform vec3 u_color;
uniform sampler2D u_diffuseTexture;

///////////////////////////////////////////////////////////
// Varyings
varying vec2 v_texCoord;

void main()
{
    vec4 texColor = texture2D(u_diffuseTexture, v_texCoord);
    gl_FragColor.rgb = u_color;
    gl_FragColor.a = texColor.a;
}