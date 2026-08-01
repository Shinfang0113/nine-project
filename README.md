HTML
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>想找實習的高中生個人作品集</title>
    <style>
        :root {
            --bg-gradient: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
            --text-color: #333;
            --card-bg: #white;
            --card-text: #555;
            --hero-desc: #666;
            --section-title-color: #4a5568;
            --primary-color: #764ba2;
            --input-bg: #fff;
            --input-border: #ccc;
        }

        [data-theme="dark"] {
            --bg-gradient: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
            --text-color: #f7fafc;
            --card-bg: #2d3748;
            --card-text: #cbd5e0;
            --hero-desc: #a0aec0;
            --section-title-color: #e2e8f0;
            --primary-color: #9f7aea;
            --input-bg: #1a202c;
            --input-border: #4a5568;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: background 0.3s ease, color 0.3s ease;
        }

        body {
            font-family: 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans CJK TC', sans-serif;
            background: var(--bg-gradient);
            color: var(--text-color);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem 1rem;
            position: relative;
        }
