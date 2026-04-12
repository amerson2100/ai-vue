import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";

const service = axios.create({
  baseURL: "/api", //请求前缀
  timeout: 5000, //请求超时时间
});

//请求拦截器
service.interceptors.request.use(
  (config) => {
    //在发送请求之前做些什么
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    //对请求错误做些什么
    return Promise.reject(error);
  },
);

//响应拦截器
service.interceptors.response.use(
  (response) => {
    //对响应数据做点什么
    const { data, config } = response;
    console.log("[Request] URL:", config.url, "Response:", data);
    if (data.code === "200" || data.code === 200) {
      return data.data;
    } else if (data.code === "-1" || data.code === -1) {
      console.error("[Request] 登录过期，code:", data.code, "msg:", data.msg);
      // 只对真正的登录过期错误进行跳转，其他业务错误不跳转
      if (
        data.msg &&
        (data.msg.includes("登录") ||
          data.msg.includes("token") ||
          data.msg.includes("Token"))
      ) {
        if (!config.url?.includes("login"))
          ElMessage.error(data.msg || "登录过期，请重新登录");
        //清除登录信息
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");
        window.location.href = "/auth/login";
      } else {
        // 其他业务错误，只显示错误信息，不跳转
        ElMessage.error(data.msg || "请求失败");
      }
      return Promise.reject(new Error(data.msg || "登录过期"));
    } else {
      console.warn("[Request] 请求失败，code:", data.code, "msg:", data.msg);
      ElMessage.error(data.msg || "请求失败");
      return Promise.reject(new Error(data.msg || "网络请求失败"));
    }
  },
  (error) => {
    //对响应错误做点什么
    console.error("[Request] 网络错误:", error);
    ElMessage.error(error.message || "网络请求错误");
    return Promise.reject(error);
  },
);

export default service;
