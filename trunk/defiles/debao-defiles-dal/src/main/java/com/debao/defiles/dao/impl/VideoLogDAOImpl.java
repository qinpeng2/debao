package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.VideoLogDAO;
import com.debao.defiles.dao.VideoLogDAO;
import com.debao.defiles.dao.mapper.VideoLogVOMapper;
import com.debao.defiles.vo.VideoLogVO;
import com.debao.defiles.vo.query.VideoLogQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class VideoLogDAOImpl implements VideoLogDAO {
	
	@Autowired
	private VideoLogVOMapper videoLogVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(VideoLogVO videoLogVO) {
		return 1 == videoLogVOMapper.insert(videoLogVO);
	}

	@Override
	public boolean update(VideoLogVO videoLogVO) {
		return 1 == videoLogVOMapper.updateByPrimaryKey(videoLogVO);
	}

	@Override
	public boolean delete(Integer id) {
		return 1 == videoLogVOMapper.deleteByPrimaryKey(id);
	}
	
	@Override
	public VideoLogVO findByID(Integer id) {
		return videoLogVOMapper.selectByPrimaryKey(id);
	}

	@Override
	public List<VideoLogVO> findAll() {
		return null;
	}

	@Override
	public List<VideoLogVO> find(VideoLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer totalFind(VideoLogQueryVO filter) {
		// TODO Auto-generated method stub
		return null;
	}

	public VideoLogVOMapper getVideoLogVOMapper() {
		return videoLogVOMapper;
	}

	public void setVideoLogVOMapper(VideoLogVOMapper videoLogVOMapper) {
		this.videoLogVOMapper = videoLogVOMapper;
	}

	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
}
