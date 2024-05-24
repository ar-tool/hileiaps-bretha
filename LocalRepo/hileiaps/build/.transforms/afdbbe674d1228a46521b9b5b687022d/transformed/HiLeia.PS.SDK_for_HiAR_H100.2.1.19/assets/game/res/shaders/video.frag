///////////////////////////////////////////////////////////
// video.frag
// Used for android video rendering.
// Created by YangJie on 2017/8/31.
// Copyright 2017 year Hiscene. All rights reserved.

#ifdef ANDROID
#extension GL_OES_EGL_image_external : require
#endif

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
uniform samplerExternalOES u_videoTexture;
#else
uniform sampler2D u_videoTexture;
#endif

uniform int u_isTranVideo; // is normal transparent video.
uniform int u_isMaskVideo; // is maksed transparent video.
uniform vec3 u_transparentColor;

///////////////////////////////////////////////////////////
// Varyings
varying vec2 v_texCoord;

///////////////////////////////////////////////////////////
// Main
void main()
{
    vec4 color = texture2D(u_videoTexture, v_texCoord);

    // TRANSPARENT
    if(u_isTranVideo == 1)
    {
        if( dot(abs(color.rgb - u_transparentColor), vec3(1.0, 1.0, 1.0)) < 0.05 )
        {
            // Discard.
            color.a = 0.0;
        }
    }

    // MASKED
    if(u_isMaskVideo == 1)
    {
        vec4 maskColor = texture2D(u_videoTexture, vec2(v_texCoord.x * 0.5 + 0.5, v_texCoord.y));
        if( dot(abs(maskColor.rgb - vec3(0.0, 0.0, 0.0) ), vec3(1.0, 1.0, 1.0)) < 0.05 )
        {
            // Discard.
            color.a = 0.0;
        }
        else
        {
            color = texture2D(u_videoTexture, vec2(v_texCoord.x * 0.5, v_texCoord.y));
        }
    }

    gl_FragColor = color;
}