import { AccountUpdateData, DashboardData, ProductData } from "./DataType"


interface Result<T> {
    type(account_id: string, type: any): unknown
    isError: boolean,
    result: T | null,
    error: string
}
function createResult<T>(result: T | null, isError: boolean = true, error: string = "") {
    return { isError: isError, result: result, error: error } as Result<T>
}

namespace Api {

    const apiURL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3001'


    // ---------------------- Account ---------------------


    export async function signup(first: string, last: string, email: string, password: string) {
        let signupData = {
            first: first,
            last: last,
            email: email,
            password: password
        }
        return post<{ token: string }>("sign-up", "", signupData)
    }

    export async function signupVerify(token: string, otp: string) {
        let signupData = {
            token: token,
            otp: otp
        }
        return post<{ token: string }>("verify-signup", "", signupData)
    }

    export async function signupOtpResend(token: string) {
        let data = {
            token: token
        }
        return post<{ token: string }>("resend-verify-otp", "", data)
    }

    export async function signin(email: string, password: string) {
        let signinData = {
            email: email,
            password: password
        }
        return post<{ token: string }>("sign-in", "", signinData)
    }

    export async function resetPasswordRequest(email: string) {
        let data = {
            email: email
        }
        return post<{ email: string }>("forgot-password", "", data)
    }

    export async function resetPassword(token: string, password: string) {
        let data = {
            password: password
        }
        return put<string>('reset-password/' + token, "", data)
    }



    // -------------------------- admin ------------------------------

    export async function getDashboardData(token: string) {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", token);
        return get<DashboardData>("admin/dashboard", ``, myHeaders)
    }

    export async function addProduct(token: string, productData: ProductData) {
        let data = {
            token: token,
            productData: productData
        }
        return post<{ status: number }>("admin/addProduct", "", data)
    }

    export async function uploadImage(token: string, formData: FormData) {
        return imagePost<{ url: string }>("admin/upload", formData, token)
    }


    export async function getUpdateProfileData(token: string) {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", token);
        return get<AccountUpdateData>("admin/updateProfile", ``, myHeaders)
    }

    export async function getUpdateProductData(token: string, productId: string) {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", token);
        return get<ProductData>("admin/updateProduct/" + productId, ``, myHeaders)
    }

    export async function updateProfile(token: string, data: AccountUpdateData) {

        let updateData = {
            token: token,
            data: data
        }
        return put("admin/updateProfile", "", updateData)
    }

    export async function updateProduct(token: string, data: ProductData) {

        let updateData = {
            token: token,
            data: data
        }
        return put("admin/updateProduct", "", updateData)
    }


    export async function deleteProductData(token: string, productId: string) {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", token);
        return deleteRequest<String>("admin/deleteProduct/" + productId, myHeaders)
    }

    export async function approveMember(token: string, isApproved: boolean, memberId: string) {

        let data = {
            token: token,
            isApproved: isApproved,
            memberId: memberId
        }
        return put("admin/approveMember", "", data)
    }

    export async function approvePublic(token: string, isPublic: boolean, memberId: string) {

        let data = {
            token: token,
            isPublic: isPublic,
            memberId: memberId
        }
        return put("admin/approvePublic", "", data)
    }












    async function imagePost<T>(path: string, formData: FormData, token: string) {
        const requestOptions: RequestInit = {
            headers: {
                "x-access-token": token
            },
            method: "POST",
            redirect: "follow",
            body: formData
        };

        try {
            const res = await fetch(`${apiURL}/${path}`, requestOptions);
            if (res.ok) {
                return createResult<T>(await res.json(), false)
            } else {
                return createResult(null, true, await res.text())
            }
        } catch (error) {
            return createResult<T>(null, true, "fetch error")
        }
    }



    async function get<T>(path: string, query: string, headers: HeadersInit | undefined = undefined) {
        const requestOptions: RequestInit = {
            method: "GET",
            redirect: "follow",
            headers: headers
        };


        try {
            const res = await fetch(`${apiURL}/${path}?${query}`, requestOptions);
            if (res.ok) {
                // const data = JSON.parse() as T
                return createResult<T>(await res.json(), false)
            } else {
                return createResult<T>(null, true, await res.text())
            }
        } catch (error) {
            return createResult<T>(null, true, "fetch error")
        }
    }

    async function post<T>(path: string, query: string, body: any) {
        const requestOptions: RequestInit = {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            redirect: "follow",
            body: JSON.stringify(body),
        };


        try {
            const res = await fetch(`${apiURL}/${path}?${query}`, requestOptions);
            if (res.ok) {
                return createResult<T>(await res.json(), false)
            } else {
                return createResult(null, true, await res.text())
            }
        } catch (error) {
            return createResult<T>(null, true, "fetch error")
        }
    }

    async function put<T>(path: string, query: string, body: any) {
        const requestOptions: RequestInit = {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            redirect: "follow",
            body: JSON.stringify(body),
        };


        try {
            const res = await fetch(`${apiURL}/${path}?${query}`, requestOptions);
            if (res.ok) {
                return createResult<string>('', false)
            } else {
                return createResult(null, true, await res.text())
            }
        } catch (error) {
            console.log(error)
            return createResult<T>(null, true, "fetch error")
        }
    }


    async function deleteRequest<T>(path: string, headers: HeadersInit) {
        const requestOptions: RequestInit = {
            method: "DELETE",
            redirect: "follow",
            headers: headers
        };


        try {
            const res = await fetch(`${apiURL}/${path}`, requestOptions);
            if (res.ok) {
                return createResult<T>(await res.text() as T, false)
            } else {
                return createResult<T>(null, true, await res.text())
            }
        } catch (error) {
            return createResult<T>(null, true, "fetch error")
        }
    }

}

export default Api