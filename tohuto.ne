@preprocessor typescript

INPUT -> 
  PORTMANTEAU

PORTMANTEAU -> 
    PREFIX:* WORD SUFFIX:*

PREFIX ->
# A
# B
# C
# D
# E
# F
# G
# H
# I
# J
# K
    "kai"
    {% d => P(d, 'human involvement') %}
# L
# M
# N
# O
# P
# Q
# R
# S
# T
# U
# V
# W
# X
# Y
# Z

SUFFIX ->
# A
# B
# C
# D
# E
# F
# G
# H
# I
# J
# K
# L
# M
# N
# O
# P
# Q
# R
# S
# T
    "tanga" 
    {% d => S(d, 'turns a verb into a noun. Usually means the place or time of a verbs action') %}
# U
# V
# W
# X
# Y
# Z
  
WORD ->
# A
    "auē"
    {% d => W(d, 'verb', 'to cry, howl, groan, wail, bawl') %}
# B
# C
# D
# E
# F
# G
# H
# I
# J
# K
  | "kai"
    {% d => W(d, 'noun', 'food, meal') %}
  | "kaitiakitanga"
    {% d => W(d, 'noun', 'guardianship, stewardship, trusteeship, trustee') %}  
  | "kāka"
    {% d => W(d, 'stative', ' be hot, red-hot (e.g. chillies), inflamed') %}
# L
# M
# N
# O
# P
# Q
# R
# S
# T
  | "tiaki"
    {% d => W(d, 'verb', 'guard, keep, nurse, care, protect') %}
# U
# V
# W
# X
# Y
# Z

ws -> [\t ]:* {% d => null %}

@{%
  // suffixes
  const S = (d:any, text:string) => {
    return {
      type: 'suffix', 
      text,
      d
    }
  }
  // words...
  const W = (d:any, type:string, translation:string) => {
    return {
      type,
      translation,
      d
    }
  }
  // prefixes...
  const P = (d:any, text:string) => {
    return {
      type: 'prefix', 
      text,
      d
    }
  }
%}