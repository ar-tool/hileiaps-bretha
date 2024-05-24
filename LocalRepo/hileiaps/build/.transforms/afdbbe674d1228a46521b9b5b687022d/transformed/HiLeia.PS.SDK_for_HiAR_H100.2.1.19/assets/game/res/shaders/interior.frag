#ifdef OPENGL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

///////////////////////////////////////////////////////////
// Uniforms
uniform vec3 animationParam;
uniform sampler2D u_textureSrc;
uniform sampler2D u_textureDst;

///////////////////////////////////////////////////////////
// Varyings
varying vec2 v_texCoord;


void main()
{
    vec4 srcColor = texture2D(u_textureSrc, v_texCoord);
    vec4 dstColor = texture2D(u_textureDst, v_texCoord);
    vec3 resultColor = srcColor.xyz * animationParam.y + dstColor.xyz * animationParam.z;
    gl_FragColor = vec4(resultColor, animationParam.x);
}