package com.debao.defiles.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;

import com.debao.defiles.dao.FileDAO;
import com.debao.defiles.dao.mapper.FileVOMapper;
import com.debao.defiles.vo.FileVO;
import com.debao.defiles.vo.query.FileQueryVO;

public class FileDAOImpl implements FileDAO {
	
	@Autowired
	private FileVOMapper fileVOMapper;
	
	@Autowired
	private SqlSession sqlSession;

	@Override
	public boolean insert(FileVO userVO) {
		return 1 == fileVOMapper.insert(userVO);
	}
	
	@Override
	public Integer insertedID() {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.FileVOMapper.selectLastInsertID");
	};

	@Override
	public boolean update(FileVO userVO) {
		return 1 == fileVOMapper.updateByPrimaryKey(userVO);
	}


	@Override
	public boolean delete(Integer id) {
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("deleted", true);
		map.put("id", id);
		return sqlSession.update("com.debao.defiles.dao.mapper.FileVOMapper.deleteFile", map) == 1;
		
	}


	@Override
	public List<FileVO> findAll() {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.FileVOMapper.selectByFilter", new FileVO());
	}
	
	@Override
	public FileVO findByID(Integer id) {
		return fileVOMapper.selectByPrimaryKey(id);
	}
	
	@Override
	public List<FileVO> find(FileQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.FileVOMapper.selectByFilter", filter);
	}
	
	@Override
	public Integer totalFind(FileQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.FileVOMapper.selectTotalByFilter", filter);
	}

	@Override
	public List<FileVO> fuzzyFind(FileQueryVO filter) {
		return sqlSession.selectList("com.debao.defiles.dao.mapper.FileVOMapper.selectByFuzzyFilter", filter);
	}

	@Override
	public Integer totalFuzzyFind(FileQueryVO filter) {
		return sqlSession.selectOne("com.debao.defiles.dao.mapper.FileVOMapper.selectTotalByFuzzyFilter", filter);
	}
	
	public SqlSession getSqlSession() {
		return sqlSession;
	}

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}


	public FileVOMapper getFileVOMapper() {
		return fileVOMapper;
	}


	public void setFileVOMapper(FileVOMapper fileVOMapper) {
		this.fileVOMapper = fileVOMapper;
	}

}
