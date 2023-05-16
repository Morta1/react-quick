import {NextRequest, NextResponse} from 'next/server';
import {NextError} from "next/dist/lib/is-error";
import {addUser} from "../../../backend/services/db";
import {User} from "../../../types";

export async function POST(request: NextRequest) {
    try {
        const res: User = await request.json();
        if (!res?.username || !res?.score) {
            return NextResponse.json({}, {status: 400});
        } else {
            await addUser(res);
        }
        return NextResponse.json({});
    } catch (err: NextError) {
        console.error('An error has occurred in user route', err);
        return NextResponse.json({}, {status: 500});
    }
}