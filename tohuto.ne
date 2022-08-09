@preprocessor typescript

INPUT -> 
  PORTMANTEAU

PORTMANTEAU -> 
    WORD:* WORD WORD:*
  
WORD ->
# A
    "auē"
    {% d => W(d, "verb", "to cry, howl, groan, wail, bawl") %}
  | "ata"
    {% d => [
      W(d, "noun", "morning"),
      W(d, "noun", "form, shape, object"),
    ] %}  
  | "ara"
    {% d => W(d, "noun", "way, path, lane, track, course, route") %}
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
    {% d => [
      W(d, "prefix", "human involvement"),
      W(d, "noun", "food, meal"), W(d, "verb", "to eat, consume, feed (oneself), partake, devour"), 
      W(d, "verb", "to drink liquid other than water, consume, feed (oneself), partake, devour")
    ] %}
  | "kaitiakitanga"
    {% d => W(d, "noun", "guardianship, stewardship, trusteeship, trustee") %}  
  | "kāka"
    {% d => W(d, "stative", " be hot, red-hot (e.g. chillies), inflamed") %}
# L
# M
# N
# O
# P
# Q
# R
# S
# T
  | "tanga" 
    {% d => W(d, "suffix", "turns a verb into a noun. Usually means the place or time of a verbs action") %}
  | "tiaki"
    {% d => W(d, "verb", "guard, keep, nurse, care, protect") %}
# U
# V
# W
  | "wai"
    {% d => [
      W(d, "noun", "water, liquid"),
      W(d, "personal noun", "who? whom? what?")
    ] %}
  | "waiata"
    {% d => W(d, "verb", "to sing") %}
# X
# Y
# Z

ws -> [\t ]:* {% d => null %}

@{%
  const W = (d:any, type:string, translation:string) => {
    return {
      type,
      translation,
      d
    }
  }
%}