export function generateId(max = 15){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let tempId = ''
    for (let index = 0; index < max; index++) {
        const i = Math.floor(Math.random() * characters.length)
        tempId += characters[i]
    }

    return tempId
}

export function generateOTP(){
    const chars = '123456789'
    let otp = ''
    for (let index = 0; index < 6; index++) {

        const i = Math.floor(Math.random() * chars.length)
        otp += chars[i]
    }

    return otp
}


export function getEmailVerifyHtml(otp: string, email: string){
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
            * {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                box-sizing: border-box;
                color: #210053b6;
            }
    
            
            section{
                margin: 4rem 0;
            }
            section>*{
                display: block;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
            }
    
            section img {
                width: 80px;
                height: 80px;
            }
    
            section h2 {
                color: #D33396;
            }
    
            section h1 {
                font-size: xx-large;
            }
        </style>
    
    </head>
    
    <body>
        <section>
            <img src="https://cdn-icons-png.flaticon.com/512/873/873388.png" alt="email icon">
            <h2>Verify your email address</h2>
            <p>We have sent email to ${email} to confirm the validity of the email address. After receiving the email use the below OTP to verify your account.</p>
            <h1>${otp}</h1>
        </section>
    </body>
    
    </html>
    `
}


export function getResetPasswordHtml(name: string, url: string){
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        * {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            box-sizing: border-box;
            color: #210053b6;
        }


        section {
            margin: 4rem 1rem;
        }

        section>* {
            display: block;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
            text-align: center;
        }

        section img {
            width: 80px;
            height: 80px;
        }

        section h2 {
            color: #D33396;
        }

        section h1 {
            font-size: xx-large;
        }

        section a{
            text-decoration: none;
            background-color: #D33396;
            padding: 0.6rem 1.5rem;
            display: block;
            color: white !important;
            border-radius: 4px;
            margin: 3rem auto;
            width: max-content;
        }
    </style>

</head>

<body>
    <section>
        <img src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="reset password">
        <h2>Reset your password</h2>
        <p><b>Hello ${name},</b></p>
        <p>Someone (hopefully you) has requested to change your password <br>
            Please click the link below to change your password now.
        </p>
        <a href="${url}">Change My Password</a>
        <p>If you didn't make this request, please disregard this email.</p>
        <p>Please note that your password will not change unless you click the above link. This link will be expire
            after 10 minutes. </p>
            <p><b>Team Flax Studio</b></p>
    </section>
</body>

</html>
    `
}