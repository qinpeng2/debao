package com.debao.defiles.dao.impl;

import com.debao.defiles.dao.VideoDAO;
import com.debao.defiles.dao.mapper.VideoVOMapper;
import com.debao.defiles.vo.VideoVO;
import com.debao.defiles.vo.query.VideoQueryVO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class VideoDAOImpl implements VideoDAO {
	
	@Autowired
	private VideoVOMapper videoVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(VideoVO driftVO) {
		return 1 == videoVOMapper.insert(driftVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.VideoVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(VideoVO driftVO) {
		return 1 == videoVOMapper.updateByPrimaryKey(driftVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.VideoVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<VideoVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.VideoVOMapper.selectByFilter", new VideoVO());
	}
	
	@Override
	public VideoVO findByID(Integer id) {
		return videoVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<VideoVO> find(VideoQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.VideoVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(VideoQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.VideoVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<VideoVO> fuzzyFind(VideoQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.VideoVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(VideoQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.VideoVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public VideoVOMapper getVideoVOMapper() {
		return videoVOMapper;
	}


	public void setVideoVOMapper(VideoVOMapper capaVOMapper) {
		this.videoVOMapper = capaVOMapper;
	}

}
