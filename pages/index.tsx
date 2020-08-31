import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import React from "react";
import {Note} from '../types/interfaces'
import Link from "next/dist/client/link";

export const Home: React.FunctionComponent = () => {
    let notes: Note[] = [
        {
            id: 1,
            title: 'Test 1',
            text: "Test note"
        },
        {
            id: 2,
            title: 'Test 2',
            text: "Test note"
        },
        {
            id: 3,
            title: 'Test 3',
            text: "Test note"
        },
        {
            id: 4,
            title: 'Test 4',
            text: "Test note"
        },
        {
            id: 5,
            title: 'Test 5',
            text: "Test note"
        },
        {
            id: 6,
            title: 'Test 6',
            text: "Test note"
        },
        {
            id: 7,
            title: 'Test 7',
            text: "Test note"
        },
        {
            id: 8,
            title: 'Test 8',
            text: "Test note"
        },
        {
            id: 9,
            title: 'Test 9',
            text: "Test note"
        }
    ];
    return (<div>
        <h1 className={styles.page_header}>Notes</h1>
        <div className={styles.notes_list_wrapper}>
            {
                notes.map(note => (
                    <Link href="/notes/[id]" as={"/notes/" + note.id}>
                        <article className={styles.notes_item}>
                            <h2>{note.title}</h2>
                            <p className={styles.post_item_text}>{note.text}</p>
                        </article>
                    </Link>
                ))
            }
        </div>
    </div>)
};

export default Home;
