import Comment from '../models/comment.model.js';

export const createComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllComments = async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
};

export const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).send('Comment not found');
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: 'Invalid comment ID' });
  }
};

export const updateComment = async (req, res) => {
  try {
    const updated = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send('Comment not found');
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const deleted = await Comment.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send('Comment not found');
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
