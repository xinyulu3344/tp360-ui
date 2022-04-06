import Mock from 'mockjs'
import homeApi from '../mock/home'
import userApi from '../mock/user'

Mock.mock('/home/getData', homeApi.getStatisticalData)
Mock.mock('/api/user/add', 'post', userApi.createUser)
Mock.mock('/api/user/edit', 'post', userApi.updateUser)