

function getTemplateForForgotPassword(user, origin, resetToken) {
    const template = `<html>
    <body style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 12px; background: #E6E6FA; padding: 15px;">
        <h3> Hi ${user},</h3>
        <div>
            <p>
                You recently requested to reset you password for your R-Shop Application.
                Click the button below to reset it.
            </p>
            <p>
                <a href=${origin}/resetpassword?token=${resetToken}>
                    <input type="submit" value="Reset your password" style="border: 0px solid #D2691E; font-weight: bold; color: white; padding: 10px; background: #D2691E; font-family: 'Segoe UI', sans-serif; font-size: 10px;" />
                </a >
            </p >
            <p>
                If you did not request a password reset, please ignore this email or reply to let us know.
                This password reset is only valid for the next 24 hours.
            </p>
            <p>
                Thanks, <br>
                Anil Vishvkarma <br>
                Software Engineer, R-Shop Inc. India
            </p>
        </div>
    </body>
    </html >`

    return template;
}

function getTemplateForResetPassword(user) {
    const template = `<html>
    <body style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 12px; background: #E6E6FA; padding: 15px;">
        <h3> Hi ${user},</h3>
        <div>
            <h4>
                Your password has been reset successfully.
            </h4>
            <p>
                This is the confirmation email that your password has been reset at ${new Date()}.
            </p>
            <p>
                Thanks, <br>
                Anil Vishvkarma <br>
                Software Engineer, R-Shop Inc. India
            </p>
        </div>
    </body>
    </html>`

    return template;
}

function getTemplateForEnroll(user, email, regNo) {
    const template = `<html>
    <body style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; font-size: 12px; background: #E6E6FA; padding: 15px;">
        <h3> Dear ${user},</h3>
        <div>
            <h4>
                You have been enrolled successfully on S-Portal Application.
            </h4>
            <p>
                Please register yourself on our portal using registration number - ${regNo} and registered email ${email}.
                You will be ask to create your account password upon success registration.
            </p>
            <p>
                Thanks, <br>
                Team <br>
                S Portal Inc. India
            </p>
        </div>
    </body>
    </html>`

    return template;
}

module.exports = {
    getTemplateForForgotPassword,
    getTemplateForResetPassword,
    getTemplateForEnroll
};
