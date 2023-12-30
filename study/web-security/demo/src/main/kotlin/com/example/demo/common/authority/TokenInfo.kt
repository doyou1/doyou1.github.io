package com.example.demo.common.authority

// 일반적으로 refreshToken도 사용함
data class TokenInfo(val grantType: String, val accessToken: String,)
