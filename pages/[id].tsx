import React, {useEffect, useState} from "react";
import styles from '../styles/NoteDetails.module.scss'
import {useRouter} from "next/router";
import {Note} from "../types/interfaces";
import {string} from "prop-types";
import commonjs from "next/dist/build/babel/plugins/commonjs";
import Link from "next/dist/client/link";

export const NoteDetails: React.FunctionComponent = () => {
    const router = useRouter();
    const {id} = router.query;

    const [note, setNote] = useState<Note>(null);

    useEffect(() => {
        const notes = localStorage.getItem("next-notes-notes");
        console.log(notes);
        if (notes) {
            const notesList:Note[] = JSON.parse(notes);
            const note = notesList.filter((note) => {
                return note.id == parseInt(id as string)
            })[0];
            setNote(note);
            console.log("Loaded note from local storage");
        }
    }, [id]);

    return (<div className={styles.page_wrapper}>
        <Link href={'/'} as={"/"}>
            <a className={styles.back_link}>&lt; Back</a>
        </Link>
        {note?
            <div className={styles.note_wrapper}>
                <h1 className={styles.note_title}>{note.title}</h1>
                <p className={styles.note_text}>{note.text}</p>
            </div>
        : <h1>Loading note...</h1>}
    </div>);
};

export default NoteDetails;
