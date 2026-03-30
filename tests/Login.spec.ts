import { websiteurl } from '../utils/config';
import {test,expect} from '@playwright/test';
test("Login Test",async({page})=>{
    await page.goto(websiteurl);

})