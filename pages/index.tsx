import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React, {useEffect, useState} from "react";
import {Note} from '../types/interfaces'
import Link from "next/dist/client/link";

export const Home: React.FunctionComponent = () => {
    
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        const notes = localStorage.getItem("next-notes-notes");
        console.log(notes);
        if (notes){
            setNotes(JSON.parse(notes));
            console.log("Loaded notes from local storage");
        }
    }, []);

    return (<div>
        <h1 className={styles.page_header}>Notes</h1>
        <div className={styles.notes_list_wrapper}>
            {notes.length>0 ?
                notes.map(note => (
                    <Link href="/notes/[id]" as={"/notes/" + note.id}>
                        <article className={styles.notes_item}>
                            <h2>{note.title}</h2>
                            <p className={styles.post_item_text}>{note.text}</p>
                        </article>
                    </Link>
                ))
                : <h2 className={styles.no_notes_message}>No notes were created yet</h2>
            }
        </div>
    </div>)
};

export default Home;
