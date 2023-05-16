import {NextResponse} from 'next/server';
import {NextError} from "next/dist/lib/is-error";
import {getAllUsers} from "../../../backend/services/db";

export async function GET() {
    try {
        const users = await getAllUsers();
        return NextResponse.json(users);
    } catch (err: NextError) {
        console.error('An error has occurred in users route', err);
        return NextResponse.json({}, {status: 500});
    }
}