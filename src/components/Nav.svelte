<script>
  export const items = [
    { endpoint: "people", label: "People" },
    { endpoint: "films", label: "Films" },
    { endpoint: "starships", label: "Starships" },
    { endpoint: "vehicles", label: "Vehicles" },
    { endpoint: "species", label: "Species" },
    { endpoint: "planets", label: "Planets" },
  ]
  export let segment;

  // Default menu state
  export let openMenu = false;
  
  // Sets click event on hamburger to toggle menu visibility
  function toggleMenu() {
    openMenu = !openMenu;
  }

  // Sets click event on menu items to close menu visibility
  function closeMenu() {
    openMenu = false;
  }
</script>

<style lang="scss">
  @import './../styles/conf.scss';
  @import "./../styles/conf/navbar.scss";
  .navbar {
    background-color: $navbar-bgcolor;
    height: $navbar-height;

    &__wrapper {
      color: $white;
      height: 100%;
      @include makeContainer(horizontal, $gutter);
    }

    &__components {
      height: 100%;
      @include makeFlex((-($gutter / 2)), wrap, null, null, null);

      @include max-screen($screen--xs - rem(1)) {
        margin-right: (-($gutter / 4));
        margin-left: (-($gutter / 4));
      }

      &__branding,
      &__menu,
      &__cta,
      &__trigger {
        height: 100%;
        // background-color: $grey--4;
        @include makeFlexItem(($gutter / 2), 0, auto);

        @include max-screen($screen--xs - rem(1)) {
          margin-right: ($gutter / 4);
          margin-left: ($gutter / 4);
        }
      }

      &__branding {
        @include makeFlex(null, nowrap, column, center, null);

        .custom-logo-link {
          display: block;

          .custom-logo {
            display: block;
            width: auto;
            height: $navbar-component-height;
          }
        }
      }

      &__menu {
        flex-grow: 1;

        @include max-screen($screen--md - rem(1)) {
          transition: $navbar-mobile-menu-transition;
          position: fixed;
          top: 0;
          // right: 0;
          // bottom: 100%;
          // left: 0;
          right: 100%;
          bottom: 0;
          left: 0;
          margin-right: 0;
          margin-left: 0;
          height: auto;
          overflow: hidden;
          box-shadow: 0 1.3125rem 3.9375rem 0 rgba($grey--1, 0.52);
        }

        &.expanded {
          // bottom: 0;
          right: ($gutter + $navbar-trigger-width);

          @include screen($screen--sm, $screen--md) {
            right: (($gutter * 1.5) + $navbar-trigger-width);
          }
        }

        &__nav {
          @include makeUnstyledList();
          width: 100%;
          height: 100%;
          @include makeFlex(null, wrap, null, null, null);

          @include max-screen($screen--md - rem(1)) {
            @include makeFlex(null, wrap, column, center, null);
            transition: $navbar-mobile-menu-transition;
            // border-right: rem(3) solid $action-color;
            background-color: $navbar-bgcolor;
          }

          // WP menu items
          .menu-item {
            @include min-screen($screen--md) {
              position: relative;
              flex: 0 0 auto;
            }

            > a {
              height: 100%;
            }

            a {
              position: relative;
              display: block;
              width: 100%;
              padding: ($gutter / 4) ($gutter / 2);
              font-weight: 700;
              @include makeTextLink($navbar-link-color, $navbar-link-color--hover, none);
            }

            &.menu-item-has-children {
              > a {
                padding-right: (($gutter / 2) + rem(16));

                @include min-screen($screen--md) {
                  padding-right: (($gutter / 4) + rem(11) + rem(5)); // 5 + icon width
                }

                &::after {
                  transition: $link-transition;
                  content: '';
                  position: absolute;
                  top: 50%;
                  right: ($gutter / 2);
                  width: rem(16);
                  height: rem(16);
                  background-image: url(../img/icon--chevron--right.svg);
                  background-repeat: no-repeat;
                  background-position: right center;
                  background-size: auto 100%;
                  transform: translateY(-50%);
                  filter: $text-color--filter;

                  @include min-screen($screen--md) {
                    right: ($gutter / 4);
                    width: rem(11);
                    height: rem(11);
                    background-image: url(../img/icon--chevron--down.svg);
                    background-size: 100% auto;
                  }
                }
              }
            }

            .sub-menu {
              @include hideElement;
              z-index: index($elements, submenu);
              @include makeUnstyledList();
              transition: $navbar-mobile-menu-transition;

              @include max-screen($screen--md - rem(1)) {
                @include makeFlex(null, nowrap, column, center, null);
                box-shadow: 0 1.3125rem 3.9375rem 0 rgba($grey--1, 0.52);
                // border-right: rem(3) solid $action-color;
              }

              @include min-screen($screen--md) {
                position: absolute;
                // left: 0;
                width: rem(196);
                min-width: rem(196);
                box-shadow: rem(-3) rem(3) ($gutter / 4) 0 rgba($border, 0.26);
                transition: $navbar-desktop-menu-transition;
              }

              .menu-item {
                a {
                  @include min-screen($screen--md) {
                    padding: ($gutter / 6) ($gutter / 2);
                  }
                }

                &.menu-item-has-children {
                  > a {
                    &::after {
                      @include min-screen($screen--md) {
                        right: ($gutter / 2);
                        background-image: url(../img/icon--chevron--right.svg);
                        background-size: auto 100%;
                      }
                    }
                  }
                }

                // View all
                &.view-all {
                  a {
                    padding-top: ($gutter / 2);
                    font-weight: 400;
                    font-size: $font-size--sm;

                    @include max-screen($screen--md - rem(1)) {
                      padding-top: (($gutter / 2) + ($gutter / 4));
                    }

                    &::before {
                      @include max-screen($screen--md - rem(1)) {
                        content: '';
                        position: absolute;
                        top: ($gutter / 3);
                        right: ($gutter / 2);
                        left: ($gutter / 2);
                        border-top: rem(1) dashed $border--light;
                      }
                    }
                  }
                }
              }
            }

            &__backdrop {
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              // background-color: rgba($grey--1, 0.06);
              opacity: 0;
              transition: $navbar-desktop-menu-transition;
              z-index: index($elements, navmenu);

              @include min-screen($screen--md) {
                position: fixed;
                top: $navbar-height;
              }
            }

            &.expanded {
              > a {
                @include makeTextLink($navbar-link-color--hover, $navbar-link-color--hover, none);

                &::after {
                  filter: $brand-primary--filter;
                }
              }

              > .sub-menu {
                @include showElement;
                position: absolute;

                @include max-screen($screen--md - rem(1)) {
                  top: 0;
                  right: ($gutter * 1.42);
                  bottom: 0;
                  left: 0;
                  background-color: $navbar-bgcolor;
                }

                @include min-screen($screen--md) {
                  width: rem(196);
                  background-color: $navbar-bgcolor;
                  top: ($navbar-height - rem(3));
                  border-top: rem(3) solid $action-color;
                  padding-top: ($gutter / 4);
                  padding-bottom: ($gutter / 3);
                  border-bottom-right-radius: $border-radius;
                  border-bottom-left-radius: $border-radius;
                }

                &::before {
                  @include min-screen($screen--md) {
                    content: '';
                    position: absolute;
                    top: rem(-9);
                    left: (($gutter / 2) - rem(6));
                    width: rem(12);
                    height: rem(6);
                    border-right: rem(8) solid transparent;
                    border-bottom: rem(8) solid $action-color;
                    border-left: rem(8) solid transparent;
                  }
                }

                .menu-item {
                  @include min-screen($screen--md) {
                    position: static;
                  }
                  &__backdrop {
                    @include min-screen($screen--md) {
                      display: none;
                    }
                  }
                  &.expanded {
                    > .sub-menu {
                      @include showElement;
                      position: absolute;

                      @include max-screen($screen--md - rem(1)) {
                        top: 0;
                        right: $gutter;
                        bottom: 0;
                        left: 0;
                        background-color: $navbar-bgcolor;
                      }

                      @include min-screen($screen--md) {
                        width: rem(196);
                        background-color: $navbar-bgcolor;
                        top: rem(-3);
                        left: calc(100% - #{$border-radius});
                        bottom: 0;
                        box-shadow: none;
                      }

                      &::before {
                        border: none;
                        width: rem(1);
                        height: auto;
                        top: (($gutter / 4) + ($gutter / 6)); // ul padding pluf $gutter/6
                        bottom: (($gutter / 4) + ($gutter / 6));
                        left: 0;
                        // background-color: $border;
                        border-left: rem(1) dashed $border--light;
                      }
                    }

                    .menu-item__backdrop {
                      top: 0;
                      right: (-($gutter));

                      @include min-screen($screen--md) {
                        display: none;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        //
        // transition: $navbar-mobile-menu-transition;
      }

      &__cta {
        @include max-screen($screen--md - rem(1)) {
          flex-grow: 1;
        }

        &__nav {
          height: 100%;
          @include makeUnstyledList();
          @include makeFlex((-($gutter / 4)), wrap, null, flex-end, center);

          @include max-screen($screen--xs - rem(1)) {
            margin-right: (-($gutter / 8));
            margin-left: (-($gutter / 8));
          }

          .menu-item {
            height: 100%;
            @include makeFlexItem(($gutter / 4), 0, auto);
            @include makeFlex(null, nowrap, column, center, null);

            @include max-screen($screen--xs - rem(1)) {
              margin-right: ($gutter / 8);
              margin-left: ($gutter / 8);
            }

            > a {
              @include makeButton(
                inline-block,
                ($input-height - rem(10)),
                ($gutter / 4),
                $gutter,
                $grey--5,
                $grey--4
              );
              box-shadow: none;
              position: static;
            }

            // Overrides
            &.button--primary {
              > a {
                @include makePrimaryButton;
              }
            }
            &.button--secondary {
              > a {
                @include makeSecondaryButton;
              }
            }
            &.button--tertiary {
              > a {
                @include makeTertiaryButton;
              }
            }
            &.button--transparent {
              > a {
                @include makeTransparentButton;
              }
            }
          }
        }
      }

      &__trigger {
        @include min-screen($screen--md) {
          display: none;
        }

        &__button {
          @include makeFlex(null, nowrap, column, center, null);
          width: $navbar-trigger-width;
          height: 100%;
          padding: 0;
          appearance: none;
          border: none;
          background-color: transparent;
          outline: none; // accessbility no-no normally

          span {
            display: block;
            width: ($navbar-trigger-width - rem(5));
            height: rem(2);
            position: relative;
            padding: 0;
            background-color: $navbar-link-color;
            transition: $navbar-link-transition;

            &::before,
            &::after {
              content: '';
              width: $navbar-trigger-width;
              height: rem(2);
              background-color: $navbar-link-color;
              position: absolute;
              right: rem(-5);
              left: 0;
              transition: $navbar-link-transition;
            }

            &::before {
              top: rem(-5);
            }

            &::after {
              bottom: rem(-5);
            }
          }

          &.expanded {
            span {
              background-color: transparent;

              &::before {
                top: 0;
                transform: rotate3d(0, 0, 1, -45deg);
              }

              &::after {
                top: 0;
                transform: rotate3d(0, 0, 1, 45deg);
              }
            }
          }
        }
      }
    }
  }
</style>

<header
  id="masthead"
  role="banner"
  class="navbar"
  >
  <div class="navbar__wrapper">
    <div class="navbar__components">

      <!-- Branding -->
      <div
        class="navbar__components__branding"
        href="http://localhost/initializer/"
        title="Initializer"
        aria-label="Logo"
        >
        <a
          class="custom-logo-link"
          href='.'
          >
          <img
            src="Impellent_Icon_PMS_Positive.svg"
            class="custom-logo"
            alt=""
            height="432"
            width="387.11"
            />
        </a>
      </div>

      <!-- Main Navigation -->
      <nav
        class="navbar__components__menu"
        class:expanded='{openMenu === true}'
        >
        <ul
          id="mastheadNav"
          class="navbar__components__menu__nav"
          >
          {#each items as item}
            <li
              class="menu-item"
              class:selected='{segment === undefined}'
            >
              <a
                rel=prefetch
                class:selected='{segment === item.endpoint}'
                href="{item.endpoint}"
                on:click={closeMenu}
                >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <!-- CTA Navigation -->
      <nav class="navbar__components__cta">
        <ul
          id="menu-navbar-cta"
          class="navbar__components__cta__nav"
          >
          <li
            class="button--transparent menu-item"
            >
            <a href=".">
              Login
            </a>
          </li>
          <li class="button--primary menu-item">
            <a href=".">
              Signup
            </a>
          </li>
        </ul>
      </nav>

      <!-- Mobile Trigger -->
      <div class="navbar__components__trigger">
        <button
          type="button"
          id="mastheadTrigger"
          class="navbar__components__trigger__button"
          class:expanded='{openMenu === true}'
          title="Menu trigger"
          aria-label="Menu trigger"
          aria-controls="mastheadNav"
          aria-haspopup="true"
          aria-expanded="false"
          on:click={toggleMenu}
          >
          <span></span>
        </button>
      </div>

    </div>
  </div>
</header>
