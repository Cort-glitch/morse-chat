let letter = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (0 < letter) {
        letter += -1
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("")
    if (36 > letter) {
        letter += 1
    }
    if (0 == letter) {
        basic.showString("_")
    } else {
        if (1 == letter) {
            basic.showString("A")
        } else {
            if (2 == letter) {
                basic.showString("B")
            } else {
                if (3 == letter) {
                    basic.showString("C")
                } else {
                    if (4 == letter) {
                        basic.showString("D")
                    } else {
                        if (5 == letter) {
                            basic.showString("E")
                        } else {
                            if (6 == letter) {
                                basic.showString("F")
                            } else {
                                if (7 == letter) {
                                    basic.showString("G")
                                } else {
                                    if (8 == letter) {
                                        basic.showString("H")
                                    } else {
                                        if (9 == letter) {
                                            basic.showString("I")
                                        } else {
                                            if (10 == letter) {
                                                basic.showString("J")
                                            } else {
                                                if (11 == letter) {
                                                    basic.showString("K")
                                                } else {
                                                    if (12 == letter) {
                                                        basic.showString("L")
                                                    } else {
                                                        if (13 == letter) {
                                                            basic.showString("M")
                                                        } else {
                                                            if (14 == letter) {
                                                                basic.showString("N")
                                                            } else {
                                                                if (15 == letter) {
                                                                    basic.showString("O")
                                                                } else {
                                                                    if (16 == letter) {
                                                                        basic.showString("P")
                                                                    } else {
                                                                        if (17 == letter) {
                                                                            basic.showString("Q")
                                                                        } else {
                                                                            if (18 == letter) {
                                                                                basic.showString("R")
                                                                            } else {
                                                                                if (19 == letter) {
                                                                                    basic.showString("S")
                                                                                } else {
                                                                                    if (20 == letter) {
                                                                                        basic.showString("T")
                                                                                    } else {
                                                                                        if (21 == letter) {
                                                                                            basic.showString("U")
                                                                                        } else {
                                                                                            if (22 == letter) {
                                                                                                basic.showString("V")
                                                                                            } else {
                                                                                                if (23 == letter) {
                                                                                                    basic.showString("W")
                                                                                                } else {
                                                                                                    if (24 == letter) {
                                                                                                        basic.showString("X")
                                                                                                    } else {
                                                                                                        if (25 == letter) {
                                                                                                            basic.showString("Y")
                                                                                                        } else {
                                                                                                            if (26 == letter) {
                                                                                                                basic.showString("Z")
                                                                                                            } else {
                                                                                                                if (27 == letter) {
                                                                                                                    basic.showString("0")
                                                                                                                } else {
                                                                                                                    if (28 == letter) {
                                                                                                                        basic.showString("1")
                                                                                                                    } else {
                                                                                                                        if (29 == letter) {
                                                                                                                            basic.showString("2")
                                                                                                                        } else {
                                                                                                                            if (30 == letter) {
                                                                                                                                basic.showString("3")
                                                                                                                            } else {
                                                                                                                                if (31 == letter) {
                                                                                                                                    basic.showString("4")
                                                                                                                                } else {
                                                                                                                                    if (32 == letter) {
                                                                                                                                        basic.showString("5")
                                                                                                                                    } else {
                                                                                                                                        if (33 == letter) {
                                                                                                                                            basic.showString("6")
                                                                                                                                        } else {
                                                                                                                                            if (34 == letter) {
                                                                                                                                                basic.showString("7")
                                                                                                                                            } else {
                                                                                                                                                if (35 == letter) {
                                                                                                                                                    basic.showString("8")
                                                                                                                                                } else {
                                                                                                                                                    if (36 == letter) {
                                                                                                                                                        basic.showString("9")
                                                                                                                                                    } else {
                                                                                                                                                        letter = 0
                                                                                                                                                    }
                                                                                                                                                    letter = 0
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("name", 0)
    letter = 0
})
radio.onReceivedString(function (receivedString) {
    if (36 > letter) {
        letter += 1
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    if (0 < letter) {
        letter += -1
    }
    if (0 == letter) {
        basic.showString("_")
    } else {
        if (1 == letter) {
            basic.showString("A")
        } else {
            if (2 == letter) {
                basic.showString("B")
            } else {
                if (3 == letter) {
                    basic.showString("C")
                } else {
                    if (4 == letter) {
                        basic.showString("D")
                    } else {
                        if (5 == letter) {
                            basic.showString("E")
                        } else {
                            if (6 == letter) {
                                basic.showString("F")
                            } else {
                                if (7 == letter) {
                                    basic.showString("G")
                                } else {
                                    if (8 == letter) {
                                        basic.showString("H")
                                    } else {
                                        if (9 == letter) {
                                            basic.showString("I")
                                        } else {
                                            if (10 == letter) {
                                                basic.showString("J")
                                            } else {
                                                if (11 == letter) {
                                                    basic.showString("K")
                                                } else {
                                                    if (12 == letter) {
                                                        basic.showString("L")
                                                    } else {
                                                        if (13 == letter) {
                                                            basic.showString("M")
                                                        } else {
                                                            if (14 == letter) {
                                                                basic.showString("N")
                                                            } else {
                                                                if (15 == letter) {
                                                                    basic.showString("O")
                                                                } else {
                                                                    if (16 == letter) {
                                                                        basic.showString("P")
                                                                    } else {
                                                                        if (17 == letter) {
                                                                            basic.showString("Q")
                                                                        } else {
                                                                            if (18 == letter) {
                                                                                basic.showString("R")
                                                                            } else {
                                                                                if (19 == letter) {
                                                                                    basic.showString("S")
                                                                                } else {
                                                                                    if (20 == letter) {
                                                                                        basic.showString("T")
                                                                                    } else {
                                                                                        if (21 == letter) {
                                                                                            basic.showString("U")
                                                                                        } else {
                                                                                            if (22 == letter) {
                                                                                                basic.showString("V")
                                                                                            } else {
                                                                                                if (23 == letter) {
                                                                                                    basic.showString("W")
                                                                                                } else {
                                                                                                    if (24 == letter) {
                                                                                                        basic.showString("X")
                                                                                                    } else {
                                                                                                        if (25 == letter) {
                                                                                                            basic.showString("Y")
                                                                                                        } else {
                                                                                                            if (26 == letter) {
                                                                                                                basic.showString("Z")
                                                                                                            } else {
                                                                                                                if (27 == letter) {
                                                                                                                    basic.showString("0")
                                                                                                                } else {
                                                                                                                    if (28 == letter) {
                                                                                                                        basic.showString("1")
                                                                                                                    } else {
                                                                                                                        if (29 == letter) {
                                                                                                                            basic.showString("2")
                                                                                                                        } else {
                                                                                                                            if (30 == letter) {
                                                                                                                                basic.showString("3")
                                                                                                                            } else {
                                                                                                                                if (31 == letter) {
                                                                                                                                    basic.showString("4")
                                                                                                                                } else {
                                                                                                                                    if (32 == letter) {
                                                                                                                                        basic.showString("5")
                                                                                                                                    } else {
                                                                                                                                        if (33 == letter) {
                                                                                                                                            basic.showString("6")
                                                                                                                                        } else {
                                                                                                                                            if (34 == letter) {
                                                                                                                                                basic.showString("7")
                                                                                                                                            } else {
                                                                                                                                                if (35 == letter) {
                                                                                                                                                    basic.showString("8")
                                                                                                                                                } else {
                                                                                                                                                    if (36 == letter) {
                                                                                                                                                        basic.showString("9")
                                                                                                                                                    } else {
                                                                                                                                                        letter = 0
                                                                                                                                                    }
                                                                                                                                                    letter = 0
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    letter = 0
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
radio.onReceivedValue(function (name, value) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (0 == letter) {
        basic.showString("_")
    } else {
        if (1 == letter) {
            basic.showString("A")
        } else {
            if (2 == letter) {
                basic.showString("B")
            } else {
                if (3 == letter) {
                    basic.showString("C")
                } else {
                    if (4 == letter) {
                        basic.showString("D")
                    } else {
                        if (5 == letter) {
                            basic.showString("E")
                        } else {
                            if (6 == letter) {
                                basic.showString("F")
                            } else {
                                if (7 == letter) {
                                    basic.showString("G")
                                } else {
                                    if (8 == letter) {
                                        basic.showString("H")
                                    } else {
                                        if (9 == letter) {
                                            basic.showString("I")
                                        } else {
                                            if (10 == letter) {
                                                basic.showString("J")
                                            } else {
                                                if (11 == letter) {
                                                    basic.showString("K")
                                                } else {
                                                    if (12 == letter) {
                                                        basic.showString("L")
                                                    } else {
                                                        if (13 == letter) {
                                                            basic.showString("M")
                                                        } else {
                                                            if (14 == letter) {
                                                                basic.showString("N")
                                                            } else {
                                                                if (15 == letter) {
                                                                    basic.showString("O")
                                                                } else {
                                                                    if (16 == letter) {
                                                                        basic.showString("P")
                                                                    } else {
                                                                        if (17 == letter) {
                                                                            basic.showString("Q")
                                                                        } else {
                                                                            if (18 == letter) {
                                                                                basic.showString("R")
                                                                            } else {
                                                                                if (19 == letter) {
                                                                                    basic.showString("S")
                                                                                } else {
                                                                                    if (20 == letter) {
                                                                                        basic.showString("T")
                                                                                    } else {
                                                                                        if (21 == letter) {
                                                                                            basic.showString("U")
                                                                                        } else {
                                                                                            if (22 == letter) {
                                                                                                basic.showString("V")
                                                                                            } else {
                                                                                                if (23 == letter) {
                                                                                                    basic.showString("W")
                                                                                                } else {
                                                                                                    if (24 == letter) {
                                                                                                        basic.showString("X")
                                                                                                    } else {
                                                                                                        if (25 == letter) {
                                                                                                            basic.showString("Y")
                                                                                                        } else {
                                                                                                            if (26 == letter) {
                                                                                                                basic.showString("Z")
                                                                                                            } else {
                                                                                                                if (27 == letter) {
                                                                                                                    basic.showString("0")
                                                                                                                } else {
                                                                                                                    if (28 == letter) {
                                                                                                                        basic.showString("1")
                                                                                                                    } else {
                                                                                                                        if (29 == letter) {
                                                                                                                            basic.showString("2")
                                                                                                                        } else {
                                                                                                                            if (30 == letter) {
                                                                                                                                basic.showString("3")
                                                                                                                            } else {
                                                                                                                                if (31 == letter) {
                                                                                                                                    basic.showString("4")
                                                                                                                                } else {
                                                                                                                                    if (32 == letter) {
                                                                                                                                        basic.showString("5")
                                                                                                                                    } else {
                                                                                                                                        if (33 == letter) {
                                                                                                                                            basic.showString("6")
                                                                                                                                        } else {
                                                                                                                                            if (34 == letter) {
                                                                                                                                                basic.showString("7")
                                                                                                                                            } else {
                                                                                                                                                if (35 == letter) {
                                                                                                                                                    basic.showString("8")
                                                                                                                                                } else {
                                                                                                                                                    if (36 == letter) {
                                                                                                                                                        basic.showString("9")
                                                                                                                                                    } else {
                                                                                                                                                        letter = 0
                                                                                                                                                        basic.pause(1000)
                                                                                                                                                        basic.showLeds(`
                                                                                                                                                            . . . . .
                                                                                                                                                            . . . . .
                                                                                                                                                            . . . . .
                                                                                                                                                            . . . . .
                                                                                                                                                            . . . . .
                                                                                                                                                            `)
                                                                                                                                                    }
                                                                                                                                                    letter = 0
                                                                                                                                                    basic.pause(1000)
                                                                                                                                                    basic.showLeds(`
                                                                                                                                                        . . . . .
                                                                                                                                                        . . . . .
                                                                                                                                                        . . . . .
                                                                                                                                                        . . . . .
                                                                                                                                                        . . . . .
                                                                                                                                                        `)
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    radio.setGroup(76)
})
