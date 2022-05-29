<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { Toast } from 'vant'
import { useI18n } from 'vue-i18n'
import SvgIcon from '@/components/SvgIcon/index.vue'
import RoundButton from '@/components/RoundButton/index.vue'
import LangSelect from '@/components/LangSelect/index.vue'

const username = ref('admin')
const password = ref('123456')
const { app: store } = useStore()
const { t } = useI18n({ useScope: 'global' })
const router = useRouter()

const doLogin = () => {
  if (!username.value || !password.value) {
    const toast = username.value ? t('login.passwordTip') : t('login.usernameTip')
    Toast(toast)
    return
  }
  store.setUsername(username.value)
  router.push('/home')
  Toast(t('login.successTip'))
}
</script>

<template>
<div class="login">
  <div class="login__inner">
    <img class="login__lock" src="../assets/imgs/lock.png" alt="lock">
    <div class="login__form">
      <div class="login__username">
        <input type="text" :placeholder="t('login.username')" v-model="username" v-focus />
        <SvgIcon icon-class="user" border-color="#ccc" color="#fff"></SvgIcon>
      </div>
      <div class="login__password">
        <input type="password" :placeholder="t('login.password')" v-model="password" />
        <SvgIcon icon-class="password" border-color="#ccc" color="#fff"></SvgIcon>
      </div>
      <div class="login__forget-pwd">
        <a href="javascript:;">{{ t('login.forgotPwdTip') }}</a>
      </div>
      <div class="login__button-group">
        <RoundButton class="sign-up-btn">{{ t('login.signUp') }}</RoundButton>
        <RoundButton class="sign-in-btn" @click="doLogin">{{ t('login.signIn') }}</RoundButton>
      </div>
    </div>
    <div class="login__three-part">
      <div class="title">{{ t('login.signInViaSocialMedia') }}</div>
      <div class="divide-line">
        <div class="left-line"></div>
        <div class="center-circle"></div>
        <div class="right-line"></div>
      </div>
      <div class="three-part-icons">
        <div class="wrap-circle">
          <SvgIcon icon-class="facebook" border-color="#fff" color="#fff"></SvgIcon>
        </div>
        <div class="wrap-circle">
          <SvgIcon icon-class="twitter" border-color="#fff" color="#fff"></SvgIcon>
        </div>
      </div>
    </div>
  </div>
  <LangSelect />
</div>
</template>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100vh;
  background: url(../assets/imgs/login_bg.png) no-repeat;
  background-size: cover;
}

.login__inner {
  height: 100vh;
  background-color: rgba(124, 89, 199, .2);

  .login__lock {
    width: 70px;
    position: absolute;
    left: 50%;
    top: 50px;
    transform: translateX(-50%);
  }

  .login__form {
    position: absolute;
    width: 300px;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    height: 200px;

    input {
      width: 270px;
      height: 40px;
      text-indent: 1em;
      font-size: 14PX;
    }

    .login__username, .login__password {
      border-radius: 6px;
      background-color: #fff;
      overflow: hidden;

      ::placeholder {
        color: #ccc;
      }

      svg {
        width: 23px;
        height: 23px;
        vertical-align: -6px;
      }
    }

    .login__password {
      margin-top: 20px;
    }

    .login__forget-pwd {
      text-align: right;
      margin-top: 4px;

      a {
        color: #fff;
        font-size: 10PX;
      }
    }

    .login__button-group {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      .sign-up-btn {
        padding-left: 50px;
        padding-right: 50px;
        background-color: rgb(102, 73, 161);
      }

      .sign-in-btn {
        background-color: rgb(255, 70, 89);
      }
    }
  }

  .login__three-part {
    position: absolute;
    bottom: 60px;
    width: 100%;
    height: 120px;
    padding: 0 40px;

    .title {
      font-size: 12PX;
      color: #fff;
      text-align: center;
      padding-bottom: 20px;
    }

    .divide-line {
      display: flex;
      align-items: center;

      .center-circle {
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;
        margin: 0 6px;
      }

      .left-line, .right-line {
        flex: 1;
        height: 1px;
        background-color: #fff;
      }
    }

    .three-part-icons {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      .wrap-circle {
        width: 60px;
        height: 60px;
        line-height: 60px;
        border: 2px solid #fff;
        border-radius: 50%;
        text-align: center;

        & + .wrap-circle {
          margin-left: 10px;
        }

        svg {
          width: 30px;
          height: 30px;
          vertical-align: -8px;
        }
      }
    }
  }
}

:deep(.van-popover__wrapper) {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
