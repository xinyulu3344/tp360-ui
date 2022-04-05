import Mock from 'mockjs'
import homeApi from '../mock/home'

Mock.mock('/home/getData', homeApi.getStatisticalData)