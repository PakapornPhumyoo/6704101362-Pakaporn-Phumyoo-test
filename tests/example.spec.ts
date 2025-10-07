import { test, expect } from '@playwright/test';

test('should fill and submit the basic form', async ({ page }) => {
  // ไปยังหน้าเว็บหลัก
  await page.goto('http://localhost:9000/6704101362-Pakaporn-Phumyoo-test/');

  // กรอกฟอร์ม
  await page.fill('input[label="Name"]', 'Pakaporn Phumyoo');
  await page.fill('input[label="Email"]', 'littlecutecumber27@gmail.com');
  await page.fill('input[label="Age"]', '19');

  // คลิกปุ่ม Submit
  await page.click('button:has-text("Submit")');

  // ตรวจสอบว่ามีข้อมูลที่ถูกส่งแสดงผลบนหน้า
  await expect(page.locator('text=Submitted Data')).toBeVisible();
  await expect(page.locator('text= Pakaporn Phumyoo')).toBeVisible();
  await expect(page.locator('text=littlecutecumber27@gmail.com')).toBeVisible();
});

