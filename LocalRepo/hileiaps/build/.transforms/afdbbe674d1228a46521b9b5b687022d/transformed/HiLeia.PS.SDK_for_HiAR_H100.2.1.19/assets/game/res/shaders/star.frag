#ifdef OPENGL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

///////////////////////////////////////////////////////////
// Uniforms
uniform float u_ratio;
uniform float u_alpha;
uniform sampler2D u_textureMask;

///////////////////////////////////////////////////////////
// Varyings
varying vec2 v_texCoord;

void main()
{
	vec4 maskColor = texture2D(u_textureMask, v_texCoord);

	float alpha = 0.0;
	if(v_texCoord.x <= u_ratio) alpha = 1.0;

	if(maskColor.x < 0.9) gl_FragColor = vec4(0.996, 0.51, 0.306, 1) * alpha;
	else gl_FragColor = maskColor;

	gl_FragColor.a *= u_alpha;
}