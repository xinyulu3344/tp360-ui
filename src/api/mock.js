import Mock from 'mockjs'
import homeApi from '../mock/home'
import userApi from '../mock/user'

Mock.mock('/home/getData', homeApi.getStatisticalData)
Mock.mock('/api/user/add', 'post', userApi.createUser)
Mock.mock('/api/user/edit', 'post', userApi.updateUser)
Mock.mock('/api/user/getUser','get', userApi.getUserList)
Mock.mock('/api/user/delUser', 'post', userApi.deleteUser)