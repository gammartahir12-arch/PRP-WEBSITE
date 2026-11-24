# Pakistan Reform Party: website with database and admin dashboard

Plain HTML/CSS/JS (no build step) + Supabase (database, login). Works on phones, tablets and laptops, on any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

## Files
- `index.html` public site (10 pages via menu: Home, About, Why PRP, Vision & Mission, Manifesto, Structure, Departments, Heritage, Join, Contact), English/Urdu switch
- `admin.html` private dashboard (separate address: `your-site/admin.html`)
- `content.js` ALL text, English and Urdu. **Put the official manifesto and founding statement here.**
- `config.js` your Supabase URL and key
- `supabase/schema.sql` database tables + security rules
- `assets/logo.png` the original dove emblem, cropped from your upload

## STEP 1: Create the database (free, ~5 minutes)
1. Go to https://supabase.com, sign up, click **New project** (choose a strong database password, nearest region). Wait ~2 minutes.
2. Open **SQL Editor > New query**, paste the whole of `supabase/schema.sql`, click **Run**.
3. Open **Project Settings > API**. Copy the **Project URL** and the **anon public** key.
4. Open `config.js` and paste both between the quotes. Save.

## STEP 2: Create your administrator login
1. Supabase > **Authentication > Users > Add user > Create new user**. Enter your email + a strong password. Tick "Auto confirm user".
2. Supabase > **SQL Editor**, run (with your email):
   `insert into admins(user_id) select id from auth.users where email = 'you@example.com';`
3. Also in **Authentication > Providers > Email**, turn OFF "Allow new users to sign up" so nobody else can create accounts.

## STEP 3: Test on your laptop
Double-click `index.html`. Submit a test registration. You should see an application ID. Open `admin.html`, sign in, and see it. (If the form says the database is not connected, `config.js` is empty.)

## STEP 4: Put it online (choose ONE)
### A) Netlify (easiest)
1. Go to https://app.netlify.com/drop and sign up.
2. Drag the whole `prp-site` folder onto the page.
3. After ~20 seconds you get a public link like `https://xxxx.netlify.app`. Rename it in **Site configuration > Change site name**.
### B) Vercel
1. Sign up at https://vercel.com, click **Add New > Project**, and either import a GitHub repository holding these files, or install the Vercel CLI and run `vercel` inside the folder. Framework preset: **Other**, no build command.
2. You get `https://your-project.vercel.app`.
### C) GitHub Pages
1. Create a free GitHub account, create a **public** repository, upload all files (keep the folders).
2. **Settings > Pages > Deploy from a branch > main > / (root) > Save**. Link: `https://USERNAME.github.io/REPO/`.

## STEP 5: Share
Send the link by WhatsApp or SMS. Test it on your phone and ask a friend to test on theirs. The admin page is `LINK/admin.html` (not linked from the public menu).
Optional: buy a domain (e.g. from Namecheap) and attach it in Netlify/Vercel **Domains** settings.

## Updating content later
Edit `content.js`, save, and upload again (Netlify: drag the folder again onto your site's **Deploys** page).

## Security notes
- The anon key in `config.js` is meant to be public. Protection comes from the row-level-security rules in `schema.sql`: visitors can only submit; only accounts in the `admins` table can read or change applications.
- Applications contain personal data. Add a real privacy policy, and consider Supabase's paid plan for backups.
- Admin roles: the `admins.role` column is ready for `dept_head` / `coordinator`; extend the policies in `schema.sql` when you add them.
- Spam: add Supabase CAPTCHA / Cloudflare Turnstile before a public launch if you see abuse.
