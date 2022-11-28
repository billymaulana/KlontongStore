/* eslint-disable no-console */
import { ofetch } from 'ofetch'

export const useMyFetch = ofetch.create({
  baseURL: 'https://637854245c477765122f22a7.mockapi.io/api/v1/',
  async onRequest({ request }) {
    console.log('fetch request', request)
  },
  async onRequestError({ request, error }) {
    console.log('fetch request error', request, error)
  },
  async onResponse({ response }) {
    console.log('fetch response', response.status, response._data)
  },
  async onResponseError({ request, response, options }) {
    console.log('fetch response error', request, response.status, response.body, options)
  },
})
