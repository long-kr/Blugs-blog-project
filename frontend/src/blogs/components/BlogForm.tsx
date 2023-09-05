import React from 'react';
import Form from 'react-bootstrap/Form';
import { PrimaryButton } from '../../components';
import { BlogProps } from '../../utils/type';

interface Props {
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
    submit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    fileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    blog: BlogProps;
}

export const BlogForm: React.FC<Props> = ({
    fileChange,
    change,
    submit,
    blog
}) => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="bug name"
                        name="title"
                        value={blog.title}
                        onChange={change}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="body">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="resolve"
                        name="content"
                        value={blog.content}
                        onChange={change}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Pic</Form.Label>
                    <Form.Control
                        type="file"
                        placeholder="picture"
                        name="img"
                        accept="image/*"
                        onChange={fileChange}
                    />
                </Form.Group>

                <PrimaryButton type="submit" onClick={submit}>
                    Create
                </PrimaryButton>
            </Form>
        </div>
    );
};
