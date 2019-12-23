$(document).ready(function() {
    //start-- computer view
    if ($(window).width() > 768) {
        //start loading animation
        TweenMax.to(".loadingContent", 0.5, {
            opacity: "0",
            onComplete: function() {
                TweenMax.to(".loading img", 1, {
                    opacity: "1",
                });
            },
        }).delay(3);

        TweenMax.to(".loading img", 0.3, {
            scaleX: "0.9",
            scaleY: "0.9",
            onComplete: function() {
                TweenMax.to(".loading img", 0.5, {
                    opacity: "0",
                    scaleX: "1.2",
                    scaleY: "1.2",
                    onComplete: function() {
                        TweenMax.to(".loading", 0.5, {
                            x: "-101%",
                            onComplete: strtAnimation(),
                        });
                    },
                });
            },
        }).delay(4.5);
        //end loading animation

        //start start animation
        var strtAnimation = function() {
            $("html").css("overflow-y", "scroll");
            TweenMax.from(".navBar", 2, {
                y: "-100%",
                ease: Expo.easeOut,
            });
            TweenMax.from(".scrollbox,.fixedBlock img,.nowBlock", 2, {
                y: "100%",
                ease: Expo.easeOut,
            });

            TweenMax.to(".motoName", 2, {
                x: "0",
                opacity: "1",
                ease: Expo.easeOut,
                onComplete: function() {},
            }).delay(1);

            TweenMax.to(".slogonBox .slogon", 2, {
                y: "0",
                ease: Expo.easeOut,
            }).delay(1.5);
        };
        //end start animation

        var nowText = function(nowposition) {
            TweenMax.to(".nowClassText span", 0.5, {
                opacity: "0",
                onComplete: function() {
                    $(".nowClassText span").text(nowposition.toUpperCase());
                    TweenMax.to(".nowClassText span", 0.5, {
                        opacity: "1",
                    });
                },
            });
        };

        $(window).on("mousewheel", function(el) {
            let scrolltop = $(window).scrollTop();
            let storyposition = $(".story");
            let featuresposition = $(".features");
            let colorposition = $(".colors");
            let galleryposition = $(".gallery");
            let specificationsposition = $(".specifications");
            let accessoriesposition = $(".accessories");

            if (scrolltop >= storyposition.offset().top - 600) {
                nowText(storyposition[0].dataset.position);
                TweenMax.to(".storyImg", 2, {
                    width: "55vw",
                    ease: Expo.easeOut,
                });
                TweenMax.to(".storyContent", 2, {
                    opacity: "1",
                    y: "-50%",
                    ease: Expo.easeOut,
                });
            }

            if (scrolltop >= featuresposition.offset().top - 600) {
                nowText(featuresposition[0].dataset.position);
                TweenMax.to(".featureTitle,.featureText", 1, {
                    opacity: "1",
                    y: "0",
                });
                TweenMax.to(".featureImages", 0.5, {
                    width: "100%",
                    onComplete: function() {
                        TweenMax.to(".animColor", 0.3, {
                            right: "-101%",
                            onComplete: function() {
                                TweenMax.to(".animColor", 0.5, {
                                    width: "0%",
                                });
                                TweenMax.to(".leftBtn,.rightBtn", 0.2, {
                                    opacity: "1",
                                    y: "0",
                                });
                            },
                        });
                    },
                });
            }

            if (scrolltop >= colorposition.offset().top - 600) {
                nowText(colorposition[0].dataset.position);
                TweenMax.to(".colorMotoImg", 1, {
                    x: "0",
                    ease: Circ.easeOut,
                });
                TweenMax.staggerTo(
                    ".colorLink",
                    0.3,
                    {
                        opacity: "1",
                        ease: Power0.easeNone,
                    },
                    0.3
                );
            }

            if (scrolltop >= galleryposition.offset().top - 600) {
                nowText(galleryposition[0].dataset.position);
                TweenMax.staggerTo(
                    ".imgGroup a",
                    1,
                    {
                        opacity: "1",
                        transform: "translateY(0%)",
                        ease: Circ.easeOut,
                    },
                    0.2
                );
            }

            if (scrolltop >= specificationsposition.offset().top - 600) {
                nowText(specificationsposition[0].dataset.position);
                TweenMax.to(".specificationsTable", 1.5, {
                    y: "0",
                    opacity: "1",
                    ease: Circ.easeOut,
                });
            }

            if (scrolltop >= accessoriesposition.offset().top - 600) {
                nowText(accessoriesposition[0].dataset.position);
                TweenMax.to(".accessoriesMoto", 1.5, {
                    y: "0",
                    opacity: "1",
                    ease: Circ.easeOut,
                });
                TweenMax.to(".accessoriesBody", 1.5, {
                    y: "0",
                    opacity: "1",
                    ease: Circ.easeOut,
                }).delay(1);
            }
        });

        $(".navlink").on("click", function(el) {
            el.preventDefault();
            var nowposition = el.currentTarget.dataset.position;
            $("html,body").animate({ scrollTop: $(`.${nowposition}`).offset().top }, 800);
            nowText(nowposition);
        });

        

        $(".closeBtn").on("click", function(el) {
            el.preventDefault();
            TweenMax.to(".m-navBar", 1, {
                left: "-102%",
                ease: Power2.easeOut,
            });
        });

        

        //end-- computer view
    } else {
        //start-- phone view

        $(".menuBtn").on("click", function(el) {
            el.preventDefault();
            TweenMax.to(".m-navBar", 1, {
                left: "0",
                ease: Power2.easeOut,
            });
        });
        $(".closeBtn").on("click", function(el) {
            el.preventDefault();
            TweenMax.to(".m-navBar", 1, {
                left: "-102%",
                ease: Power2.easeOut,
            });
        });

        $(".m-menuLink").on("click", function(el) {
            TweenMax.to(".m-navBar", 1, {
                left: "-102%",
                ease: Power2.easeOut,
            });
        });


        $(".loading").hide();
        $("html").css("overflow-y", "scroll");

        var phoneShow = function(classname, transformNum = "none") {
            $(classname).css("transform", transformNum);
            $(classname).css("opacity", "1");
        };
        phoneShow(".motoName,.slogon,.leftBtn,.rightBtn,.featureTitle,.featureText,.colorMotoImg,.colorLink,.imgGroup a,.specificationsTable,.specificationsTable,.accessoriesContent>div");
        phoneShow(".storyContent", "translateY(-40%)");
        $(".featureImages").css("width", "100%");
        $(".animColor").css("right", "-101%");
    }
    //end-- phone view


    //start-- feature animation
    var imgNum = 0;
    var featureList = [
        {
            title: "高品質的復古風部件",
            text:
                "致敬過往的經典設計，XSR700採用了雙紋理的皮革座墊、鋁製油箱及復古的圓形頭燈及尾燈。另外，藉由金屬的網狀護蓋、較短的排氣管，以及高品質的鋁製零件（如前土除支架、水箱護蓋等），更加強了整體的視覺印象。",
        },
        {
            title: "689cc硬派引擎表現",
            text:
                "讓XSR700與眾不同的是這顆結合YAMAHA十字曲軸理念的並列雙缸引擎。藉由不對稱點火和270度曲軸夾角的設計，帶來更佳的加速感和循跡性，線性的扭力更是確保了優異性能。",
        },
        {
            title: "輕量化管狀車架",
            text:
                "輕巧鋼材構成結合可拆式副車架，再加上短軸距設計與柔韌的前後懸吊系統，讓XSR700同時兼具操控靈活與暢快加速兩大優勢。",
        },
        {
            title: "以最佳的騎姿來打造",
            text:
                "以Faster Sons理念來打造的首台車款，在傳遞復古雋永的同時，也未向操控性有所妥協。為了將加速時帶來的興奮感最大化，車架、配重都經過仔細的分配，讓騎士達到人車一體的境界。",
        },
        {
            title: "隨心所欲的性能與經典風格",
            text:
                "水冷引擎、輕量車架與雋永風格的完美結合。無論新手或是經驗豐富的騎士，都能沉醉於優異性能帶來的騎乘體驗。",
        },
        {
            title: "中置多連桿後避震",
            text:
                "水平式避震設計的後懸吊系統，藉由直接安裝於引擎曲軸箱上的優勢，大幅節省空間以打造更加緊實動感的整體車身。同時搭載530mm的短後搖臂，讓你與XSR700能更趨於人車一體的聯繫境界。",
        },
        {
            title: "浪花造型碟盤與對四卡鉗",
            text:
                "為了提供更全面的駕馭樂趣，經典的XSR700採用了現代化的煞車系統。其中包含將制動力最大化的前282mm的雙浪花造型碟盤及對四卡鉗，與ABS（Anti-lock braking system）作為標準配備。此外，採用輕量的十輻鋁製輪圈與Pirelli Phantom輪胎，給予了更實在的行車性能。",
        },
        {
            title: "致敬經典圓滿之作",
            text:
                "採用復古風格的圓形貫穿全車，藉由易讀、簡約的設計，給予騎士更清晰視野。在種種細節配置下，你能看見XSR700替經典落下最圓滿的詮釋方式。",
        },
    ];

    $(".rightBtn").on("click", function(el) {
        el.preventDefault();
        imgNum += 1;
        if (imgNum < 8) {
            TweenMax.to(".featureImages img", 0.5, {
                x: `-${imgNum * 100}%`,
            });
            $(".featureTitle").text(featureList[imgNum].title);
        } else {
            TweenMax.to(".featureImages img", 0.5, {
                x: "0%",
            });
            imgNum = 0;
        }
        $(".featureTitle").text(featureList[imgNum].title);
        $(".featureText").text(featureList[imgNum].text);
    });

    $(".leftBtn").on("click", function(el) {
        el.preventDefault();
        imgNum -= 1;
        if (imgNum < 8 && imgNum >= 0) {
            TweenMax.to(".featureImages img", 0.5, {
                x: `-${imgNum * 100}%`,
            });
        } else {
            TweenMax.to(".featureImages img", 0.5, {
                x: "-700%",
            });
            imgNum = 7;
        }
        $(".featureTitle").text(featureList[imgNum].title);
        $(".featureText").text(featureList[imgNum].text);
    });
    //end-- feature animation

    //start-- color animation
    $(".colorLinkGroup a").on("click", function(el) {
        var vm = $(this);
        el.preventDefault();
        $(".colorLinkGroup a").removeClass("active");
        vm.addClass("active");
        TweenMax.to(".colorMotoImg", 0.5, {
            x: "-100%",
            onComplete: function() {
                console.log(vm);
                $(".colorMotoImg").css("background-image", `url(./images/XSR700${vm[0].dataset.color}.png)`);
                TweenMax.to(".colorMotoImg", 0.8, {
                    x: "0%",
                }).delay(0.3);
            },
        });
    });
    //end-- color animation
});
