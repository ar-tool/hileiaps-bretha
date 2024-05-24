///////////////////////////////////////////////////////////
// camera.frag
// Created by YangJie on 2017/9/1.
// Copyright 2017 year Hiscene. All rights reserved.

#ifdef OPENGL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

///////////////////////////////////////////////////////////
// Uniforms
#ifdef ANDROID
uniform sampler2D u_yTexture;
uniform sampler2D u_uvTexture;
#else
uniform sampler2D u_diffuseTex;
#endif

///////////////////////////////////////////////////////////
// Varyings
varying vec2 v_texCoord;

///////////////////////////////////////////////////////////
// Main
void main()
{
#ifdef ANDROID
    float r, g, b, y, u, v;
    y = texture2D(u_yTexture, v_texCoord).r;
    u = texture2D(u_uvTexture, v_texCoord).a - 0.5;
    v = texture2D(u_uvTexture, v_texCoord).r - 0.5;
    r = y + 1.13983 * v;
    g = y - 0.39465 * u - 0.58060 * v;
    b = y + 2.03211 * u;
    gl_FragColor = vec4(r, g, b, 1.0);
#else
    gl_FragColor = texture2D(u_diffuseTex, v_texCoord);
#endif
}