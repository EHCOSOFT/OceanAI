
$(document).ready(function () {
    // 공통 jQuery 코드 (모바일과 PC 모두에 적용)
    function applyCommonjQuery() {
        $("#header").append(Header());
        $("#footer").append(Footer());

        function Header() {
            return `
            <div class="container">
                <div class="header-wrap">
                    <a href="javasciprt:void(0);">
                        <div class="header-logo"></div>
                    </a>
                    <nav class="header-navbar">
                        <ul class="nav">
                            <li>
                                <a href="#">기업소개</a>
                                <ul class="nav-list">
                                    <li class="nav-item">
                                        <a href="기업소개.html#aboutVision">회사소개</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="기업소개.html#aboutHistory">연혁</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="기업소개.html#aboutPartners">주요 고객사</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);">회사 소식</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">제품정보</a>
                                <ul class="nav-list">
                                    <li class="nav-item">
                                        <a href="javascript:void(0);">X-BAND RADAR</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);">파랑계측모니터링 시스템</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);">사용자 맞춤형 모니터링 시스템</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">특허 및 연구</a>
                                <ul class="nav-list">
                                    <li class="nav-item">
                                        <a href="javascript:void(0);">특허</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);">연구 및 실적</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">고객 지원</a>
                                <ul class="nav-list">
                                    <li class="nav-item">
                                        <a href="javascript:void(0);">자료실</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="javascript:void(0);">문의</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div class="header-menu">
                        <button type="button" class="btn btn-globe"></button>
                        <div class="header-globe">
                            <ul>
                                <li class="active">
                                    <a href="#">KO</a>
                                </li>
                                <li>
                                    <a href="#">EN</a>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-menu"></button>
                    </div>

                    <div class="header-nav">
                        <div class="header-nav-header">
                            <button type="button" class="btn btn-close"></button>
                        </div>
                        <div class="header-nav-body">
                            <ul class="left">
                                <li class="active">
                                    <a href="#" data-target="#menu-one">기업소개</a>
                                </li>
                                <li>
                                    <a href="#" data-target="#menu-two">제품정보</a>
                                </li>
                                <li>
                                    <a href="#" data-target="#menu-three">특허 및 연구</a>
                                </li>
                                <li>
                                    <a href="#" data-target="#menu-four">고객 지원</a>
                                </li>
                            </ul>
                            <div class="right">
                                <ul id="menu-one" class="active">
                                    <li>
                                        <a href="#">회사소개</a>
                                    </li>
                                    <li>
                                        <a href="#">연혁</a>
                                    </li>
                                    <li>
                                        <a href="#">주요 고객사</a>
                                    </li>
                                    <li>
                                        <a href="#">회사 소식</a>
                                    </li>
                                </ul>
                                <ul id="menu-two" class="none">
                                    <li>
                                        <a href="#">X-BAND RADAR</a>
                                    </li>
                                    <li>
                                        <a href="#">파랑계측모니터링 시스템</a>
                                    </li>
                                    <li>
                                        <a href="#">사용자 맞춤형 모니터링 시스템</a>
                                    </li>
                                </ul>
                                <ul id="menu-three" class="none">
                                    <li>
                                        <a href="#">특허</a>
                                    </li>
                                    <li>
                                        <a href="#">연구 및 실적</a>
                                    </li>
                                </ul>
                                <ul id="menu-four" class="none">
                                    <li>
                                        <a href="#">자료실</a>
                                    </li>
                                    <li>
                                        <a href="#">문의</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        };

        function Footer() {
            return `
            <div class="container">
                    <div class="footer-wrap">
                        <div class="footer-info">
                            <a href="javascript:void(0);">
                                <img src="img/logo-w.png" alt="OCEAN AI">
                            </a>
                            <div class="footer-text">
                                <h6>부산광역시 남구 신선로 428, 410-9호<br class="mo">(용당동, 동명대학교 국제산학협력관)</h6>
                                <h6>+82-00-000-0000</h6>
                                <h6>abc@gmail.com</h6>
                            </div>
                        </div> 
                        <hr>
                        <p>@ 2024 OCEANAI. ALL RIGHTS RESERVED</p>
                    </div>
                </div>
            `
        };

        // 페이지가 완전히 로드된 후 body에 'loaded' 클래스 추가
        $('body').addClass('loaded');

        // 스크롤 이벤트 핸들러
        var header = $('#header'); // 헤더 선택
        var scrolled = false; // 스크롤 여부를 추적하는 변수

        // 스크롤 이벤트 핸들러
        $(window).on('scroll', function () {
            // 페이지의 스크롤 위치가 50px 이상일 때
            if ($(this).scrollTop() > 50) {
                header.addClass('active'); // .active 클래스 추가
                scrolled = true; // 스크롤됨을 표시
            } else {
                header.removeClass('active'); // .active 클래스 제거
                scrolled = false; // 스크롤되지 않은 상태로 표시
            }
        });

        // header 요소에 마우스 오버/아웃 시 active 클래스 추가/제거
        $('#header').hover(
            function () {
                $(this).addClass('active');
            }, function () {
                if (!scrolled) { // 스크롤되지 않은 상태에서만 active 클래스 제거
                    $(this).removeClass('active');
                }
            }
        );

        let removeActiveTimeout;
        // .nav > li 클릭 이벤트 핸들러
        $('.nav > li > a').on('click', function (e) {
            e.preventDefault(); // 기본 링크 동작 방지

            // 현재 클릭된 li 요소
            var $parentLi = $(this).parent('li');

            // 다른 모든 li 요소에서 active 클래스 제거
            $('.nav > li').removeClass('active');
            $('.nav-list').removeClass('active');

            // 현재 클릭된 li 요소에 active 클래스 추가
            $parentLi.addClass('active');
            $parentLi.find('.nav-list').addClass('active');

            // 마우스가 nav-list 바깥으로 나가면 active 클래스 제거
            let mouseMoved = false;

            // 마우스 움직임 감지 이벤트
            $(document).on('mousemove.navListCheck', function (e) {
                if ($(e.target).closest('.nav-list').length) {
                    mouseMoved = true;
                    clearTimeout(removeActiveTimeout);
                } else if (!$(e.target).closest('.nav').length) {
                    // nav-list 외부로 이동 시 active 클래스 제거
                    clearTimeout(removeActiveTimeout);
                    $parentLi.removeClass('active');
                    $parentLi.find('.nav-list').removeClass('active');
                    $(document).off('mousemove.navListCheck');
                }
            });

            // 일정 시간 동안 마우스가 nav-list로 이동하지 않으면 active 클래스 제거
            // removeActiveTimeout = setTimeout(function () {
            //     if (!mouseMoved) {
            //         $parentLi.removeClass('active');
            //         $parentLi.find('.nav-list').removeClass('active');
            //     }
            //     $(document).off('mousemove.navListCheck');
            // }, 1000); // 1000ms 후에 active 클래스 제거

        });

        $('.nav-list .nav-item a').on('click', function () {
            $('.nav > li').removeClass('active');
            $('.nav-list').removeClass('active');
        });

        $('.nav-list').on('mouseleave', function () {
            $('.nav > li').removeClass('active');
            $('.nav-list').removeClass('active');
        });

        // .nav-list 영역 밖을 클릭하면 active 클래스 제거
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.nav').length) {
                $('.nav > li').removeClass('active');
                $('.nav-list').removeClass('active');
            }
        });


        // .btn-menu를 클릭하면 .header-nav가 부드럽게 나타남
        $('.btn-menu').on('click', function () {
            $('.header-nav').addClass('active');
        });

        $('.header-nav').on('mouseleave', function () {
            $(this).removeClass('active');
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.header-nav, .btn-menu').length) {
                $('.header-nav').removeClass('active');
            }
        });

        // .btn-close를 클릭하면 .header-nav가 부드럽게 사라짐
        $('.btn-close').on('click', function () {
            $('.header-nav').removeClass('active');
        });

        let removeGlobeActiveTimeout;

    // .btn-globe 클릭 시
    $('.btn-globe').on('click', function () {
        $('.header-globe').addClass('active');

        // 마우스가 header-globe로 이동하지 않으면 active 클래스 제거
        let mouseMoved = false;

        // 마우스 움직임 감지 이벤트
        // $(document).on('mousemove.globeCheck', function (e) {
        //     if ($(e.target).closest('.header-globe').length) {
        //         mouseMoved = true;
        //         clearTimeout(removeGlobeActiveTimeout);
        //     } else if (!$(e.target).closest('.header-globe, .btn-globe').length) {
        //         // header-globe 외부로 이동 시 active 클래스 제거
        //         clearTimeout(removeGlobeActiveTimeout);
        //         $('.header-globe').removeClass('active');
        //         $(document).off('mousemove.globeCheck');
        //     }
        // });

        // 일정 시간 동안 마우스가 header-globe로 이동하지 않으면 active 클래스 제거
        removeGlobeActiveTimeout = setTimeout(function () {
            if (!mouseMoved) {
                $('.header-globe').removeClass('active');
            }
            $(document).off('mousemove.globeCheck');
        }, 1000); // 1000ms 후에 active 클래스 제거
    });

    // header-globe 내부의 a 요소 클릭 시
    $('.header-globe ul li a').on('click', function () {
        $('.header-globe').removeClass('active');
    });

    // header-globe 영역에서 마우스가 나갈 때 active 클래스 제거
    $('.header-globe').on('mouseleave', function () {
        $(this).removeClass('active');
    });

    // 문서의 다른 부분을 클릭하면 header-globe에서 active 클래스 제거
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.header-globe, .btn-globe').length) {
            $('.header-globe').removeClass('active');
        }
    });

        // .left ul li a 클릭 시 동작
        $('.header-nav-body .left li a').on('click', function (e) {
            e.preventDefault(); // 기본 동작 방지

            // 모든 li에서 active 클래스 제거
            $('.header-nav-body .left li').removeClass('active');

            // 클릭된 a의 부모 li에 active 클래스 추가
            $(this).parent('li').addClass('active');

            // 모든 .right ul에서 active 클래스 제거하고 none 클래스 추가
            $('.header-nav-body .right ul').removeClass('active').addClass('none');

            // 클릭된 a의 data-target 속성 값을 가져와 해당 id를 가진 ul에 active 클래스 추가하고 none 클래스 제거
            var target = $(this).data('target');
            $(target).removeClass('none').addClass('active');
        });

        $('.header-nav-body .right li a').on('click', function () {
            $('.header-nav').removeClass('active');
        });

        // 모달 열기 버튼 클릭 이벤트
        $(".open-modal").click(function () {
            var modalId = $(this).data("modal-id");
            $("#" + modalId).addClass("active");
            $("body").css("overflow", "hidden");
            // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
        });

        // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
        $(".btn-modal-close, .modal-wrap").click(function () {
            $(".modal-wrap").removeClass("active");
            $("body").css("overflow", "auto");
            // window.removeEventListener("wheel", removeDefaultEvent);
        });

        // 모달 내부 클릭 시 닫기 방지
        $(".modal-content").click(function (e) {
            e.stopPropagation();
        });

        // 특정 섹션(#ID)으로 이동하는 링크 클릭 처리
        $('a[href*="#"]').on('click', function (e) {
            // 링크가 동일한 페이지 내의 앵커로 향하는지 확인
            if (this.pathname === window.location.pathname && this.hash !== "") {
                e.preventDefault(); // 기본 앵커 클릭 동작 방지

                var target = $(this.hash); // 해시(hash)를 기준으로 대상 요소 선택

                if (target.length) {
                    // -100px 오프셋으로 대상 섹션으로 스크롤
                    $('html, body').animate({
                        scrollTop: target.offset().top - 140
                    }, 500); // 500ms 동안 부드럽게 스크롤 (옵션)
                }
            }
        });
    }

    // 반응형 jQuery 코드
    function applyResponsivejQuery() {
        var windowWidth = $(window).width();

        if (windowWidth <= 992) {
            // 모바일 전용 jQuery 코드
            var swiper = new Swiper(".historySwiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                slidesPerView: 1.2,
                spaceBetween: 16,
            });
        } else {
            // PC 전용 jQuery 코드
            var swiper = new Swiper(".historySwiper", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                slidesPerView: 3,
                spaceBetween: 16,
            });
        }
    }

    // 공통 jQuery 적용
    applyCommonjQuery();

    // 반응형 jQuery 적용
    applyResponsivejQuery();

    // 창 크기 조정 시 반응형 jQuery 적용
    $(window).resize(applyResponsivejQuery);
});