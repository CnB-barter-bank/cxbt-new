import { readContract as originalReadContract } from '@wagmi/core'
import {throttle} from './tools'

export const readContract = throttle(originalReadContract, 2000)